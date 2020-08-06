import React,{ useState } from 'react';
import PropsTypes from "prop-types"

function useInputValue(defaultValue = ""){
    const [value, setValue] = useState(defaultValue)

    return {
        bind: { 
        value,
        onChange: event => setValue(event.target.value)
         },
         clear: () => setValue(''),
         value: () => value
    }
    
}

function AddTodo({onCreate}){
    const input = useInputValue('')

    
    function submitHandler(event){
        event.preventDefault();
        if(input.value().trim()){
            onCreate(input.value())
            input.clear('')
        }
    }
    
    return (
        <form onSubmit={submitHandler}>
            <input className="input-create" placeholder="Your task" {...input.bind}/>
            <button type="submit">
                Create new task
            </button>
        </form>
    )
}

AddTodo.PropsTypes = {
    onCreate: PropsTypes.func.isRequired,
}

export default AddTodo