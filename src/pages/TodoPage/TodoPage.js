import React from 'react'
import Container from '../../Components/Container/container'
import { v4 as uuid } from 'uuid'
import TodoList from '../../Components/TodoPageComponents/TodoList'
import TodoForm from '../../Components/TodoPageComponents/TodoForm'
import { useState } from 'react'

const TodoPage = () => {
    const initialData = [
        {
            id: uuid(),
            date: '2023-10-15',
            title: 'Pagaminti kostiumą',
            description: 'Rudens gėrybės kostiumas iš antrinių žaliavų',
            done: false,
            dueDate: '2023-10-20',
            updatedDate: null,
        },
        {
            id: uuid(),
            date: '2023-10-16',
            title: 'React užduotis',
            description: 'Parašyti react kodą Todo užduočiai',
            done: false,
            dueDate: '2023-10-17',
            updatedDate: null,
        },
        {
            id: uuid(),
            date: '2023-10-17',
            title: 'Nupirkti maisto',
            description: 'Nupirkti trūkstamus produktus priešpiečių dėžutei',
            done: false,
            dueDate: '2023-10-18',
            updatedDate: null,
        },
        {
            id: uuid(),
            date: '2023-10-18',
            title: 'Susirinkimas',
            description: 'Susirinkimas mokykloje 18 val.',
            done: false,
            dueDate: '2023-10-19',
            updatedDate: null,
        },
        {
            id: uuid(),
            date: '2023-10-19',
            title: 'Egzaminas',
            description: 'Pasiruošti egzaminui',
            done: false,
            dueDate: '2023-10-31',
            updatedDate: null,
        },
    ]

    const [todos, setTodos] = useState(initialData)
    const [editTodo, setEditTodo] = useState(null)

    const doneTodoHandler = (id) => {
        console.log(id)
        const clickedTodoIndex = todos.findIndex(todo => todo.id === id)

        setTodos(prevState => {
            const newState = [...prevState]
            const clickedTodo = newState[clickedTodoIndex]
            const updatedTodo = {...clickedTodo}
            updatedTodo.done = !updatedTodo.done

            newState[clickedTodoIndex] = updatedTodo

            return newState
        })
    }

    const removeTodoHandler = (id) => {
        setTodos(prevState => prevState.filter(todo => todo.id !== id))
    }

    const addTodoHandler = (newTodo) => {
        if (editTodo) {
            setTodos(prevState => {
                const editId = newTodo.id
                const editIndex = todos.findIndex(todo => todo.id === editId)
                const newState = [...prevState]

                newState[editIndex] = newTodo

                setEditTodo(null)
                return newState
            })
        } else {
            setTodos(prevState => [newTodo, ...prevState])
        }
    }

    const editTodoHandler = (id) => {
        
        const selectedEditTodo = todos.find(todo => todo.id === id)
        setEditTodo(selectedEditTodo)
    }

  return (
    <Container> 
      <h1>Todo page</h1>

       <TodoForm editData={editTodo} onNewTodo={addTodoHandler}/>


       <TodoList onTodoEdit={editTodoHandler} onTodoRemove={removeTodoHandler} onTodoDone={doneTodoHandler} data={todos}/>

    </Container>
  )
}

export default TodoPage