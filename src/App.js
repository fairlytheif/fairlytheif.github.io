import React, {useEffect} from 'react';
import TodoList from "./Todo/TodoList.js"
import Context from "./context";
import AddTodo from './Todo/AddTodo'
import Loader from './loader'


function App(props){
  const [loading, setLoading] = React.useState(true)
  const [todos, setTodos] = React.useState([
  
  ]
  )

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
    .then(response => response.json())
    .then(todos => {
      setTimeout(() =>{
        setTodos(todos)
        setLoading(false)
      },2000)
    })
  },[])

  function TodoToggle(id){
    setTodos(todos.map((todo) =>{
      if(todo.id === id){
        todo.completed = !todo.completed
      }
      return todo;
    }))
  }

function removeTodo(id){
  setTodos(todos.filter(todo => todo.id !== id))
}

function addTodo(title){
  setTodos(todos.concat([{
    title,
    id: Date.now(),
    completed: false
  }]))
}

  return(
    <Context.Provider value={{removeTodo}}>
      <div className="my_app">

      {todos.length ? <TodoList todos={todos} onToggle={TodoToggle} />: loading ? <h1>Todo Manager</h1> : <div> <h1>Todo Manager</h1> <p>Tasks not found</p> </div>}
      {loading && <Loader/>}
      {loading && <p>JSONPlaceholder tasks are loading...</p>}
      <AddTodo onCreate={addTodo} />
    </div>
    </Context.Provider>
  )
}


  export default App;

