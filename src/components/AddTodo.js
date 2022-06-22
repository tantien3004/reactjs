import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";

const AddTodo = props => {  

    const addTodo = props.addTodoFunc
    const [title, setTitle] = useState('')

    const changeTitle = event => {
        setTitle(event.target.value)
    }

    const addSingerTodo = event => {
        event.preventDefault()
        if (title !== '' && /\S/.test(title))
        {
            addTodo(title);
        }
    }
 
    return (
        <form onSubmit={addSingerTodo} >
            <input value={title} type='text' name='title' placeholder='Enter your work' onChange={ changeTitle } />
            <input type='submit' value='Add' />
        </form>
    )
}

AddTodo.propTypes = {
    addTodoFunc: PropTypes.func.isRequired,

}

export default AddTodo