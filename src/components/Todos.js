import React, { Fragment, useState } from 'react'
import TodoItem from './TodoItem'
import AddTodo from './AddTodo'
const { v4: uuidv4 } = require('uuid');

const Todos = () => {
    const [todosState, setTodosState] = useState([
        {
            id: uuidv4(),
            title: 'Cleaning',
            completed: false,
        },
        {
            id: uuidv4(),
            title: 'Cooking',
            completed: false,
        },
        {
            id: uuidv4(),
            title: 'Do exercise',
            completed: false,
        }
    ])

    const markComplete = id => {
        const newTodos = todosState.map(todo => {
            if (todo.id === id) todo.completed = !todo.completed
            return todo
        })

        setTodosState(newTodos)
    }

    const deleteTodo = (id) => {
        const newTodos = todosState.filter(todo => todo.id !== id)
        setTodosState(newTodos)
    }

    const addTodo = (title) => {
        const newTodos = [...todosState, // = const newTodos = [{viec1}, {viec2}, {viec3}]
        {
            id: uuidv4(),
            title,
            completed: false,
        }]  

        setTodosState(newTodos)
    }
    
    return (
        <Fragment>
            <AddTodo addTodoFunc={addTodo} />
            {todosState.map(todo => {
                return <TodoItem key={todo.id} todoProps = {todo} markCompleteFunc = {markComplete} 
                deleteTodoFunc = {deleteTodo}/>
            })}
        </Fragment>
        
    )
}

export default Todos