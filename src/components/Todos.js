import React, { Fragment, useState, useEffect } from 'react'
import TodoItem from './TodoItem'
import AddTodo from './AddTodo'
const { v4: uuidv4 } = require('uuid')
import axios from 'axios'

const Todos = () => {
    const [todosState, setTodosState] = useState([
        // {
        //     id: uuidv4(),
        //     title: 'Cleaning',
        //     completed: false,
        // },
        // {
        //     id: uuidv4(),
        //     title: 'Cooking',
        //     completed: false,
        // },
        // {
        //     id: uuidv4(),
        //     title: 'Do exercise',
        //     completed: false,
        // }

    ])

    useEffect(() => {
        const getTodos = async () => {
            try {
                const res = await axios.get( //bất đồng bộ
                    'https://jsonplaceholder.typicode.com/todos?_limit=10'
                )
                setTodosState(res.data)
            } catch (error) {
                console.log(error.message)
            }
        }

        getTodos()
    }, [])

    const markComplete = id => {
        const newTodos = todosState.map(todo => {
            if (todo.id === id) todo.completed = !todo.completed
            return todo
        })

        setTodosState(newTodos)
    }

    const deleteTodo = async (id) => {
        try {
            await axios.delete('https://jsonplaceholder.typicode.com/todos/${id}')
            const newTodos = todosState.filter(todo => todo.id !== id)
            setTodosState(newTodos)

        } catch (error) {
            console.log(error.message)
        }
    }

    const addTodo = async (title) => {
        try {
            const res = await axios.post(
                'https:://jsonplaceholder.typicode.com/todos',{
                    title,
                    completed: false,
                }
            )
            const newTodos = [...todosState, res.data]
            setTodosState(newTodos)
        } catch (error) {
            console.log(error.message)
        }
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