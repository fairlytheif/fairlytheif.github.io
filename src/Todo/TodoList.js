import React from "react";
import TodoItem from "./TodoItem.js";
import PropsTypes from "prop-types";

function TodoList(props){
    return(
           <ul>
               <h1>Todo Manager</h1>
              {props.todos.map((todo, index) =>{
                  return <TodoItem todo={todo} index={index} key={todo.id} onChange={props.onToggle} removeTodo={props.removeTodo}/>
              })}
              
           </ul>
    )
}

TodoList.PropsTypes = {
    todo: PropsTypes.arrayOf(PropsTypes.object).isRequired,
    onToggle: PropsTypes.func.isRequired
}

export default TodoList