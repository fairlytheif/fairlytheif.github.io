import React, { useContext } from "react";
import PropsTypes from "prop-types";
import Context from "../context";

function TodoItem({todo, index, onChange}){
    const { removeTodo } = useContext(Context)
    const classes = ["todo-li"]

    if(todo.completed){
        classes.push("done")
    }

    return <li  className={classes.join(" ")}>
        <span>
            <input type="checkbox" className="checkbox-todo" onChange={() => onChange(todo.id)} checked={todo.completed} />
        </span>
        <strong>
            <p className="index-todo">{index + 1}</p>
            &nbsp;
        </strong>
     <p className="todo-text">{todo.title}</p>
     <button className="button-remove" onClick={removeTodo.bind(null, todo.id)}>&times;</button>
     </li>
}

TodoItem.PropsTypes = {
    todo: PropsTypes.object.isRequired,
    index: PropsTypes.number,
    onChange: PropsTypes.func.isRequired,
    removeTodo: PropsTypes.func.isRequired
}

export default TodoItem