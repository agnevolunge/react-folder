import React, { useEffect } from 'react'
import { useState } from 'react'
import { v4 as uuid } from 'uuid'

const TodoForm = ({ onNewTodo, editData }) => {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [done, setDone] = useState('false')
    const [dueDate, setDueDate] = useState('')

    useEffect(() => {
        if (editData) {
            setTitle(editData.title)
            setDescription(editData.description)
            setDone(editData.done)
            setDueDate(editData.dueDate)
        } 
    }, [editData])
    

    const titleHandler = (event) => {
        setTitle(event.target.value)
    }

    const descriptionHandler = (event) => {
        setDescription(event.target.value)
    }

    const doneHandler = (event) => {
        setDone(event.target.checked)
    }

    const dateHandler = (event) => {
        setDueDate(event.target.value)
    }

    const newTodoHandler = (event) => {
        event.preventDefault()
        console.log('submit')

        const date = new Date()
        // const day = date.getDate().toString().padStart(2, '0')
        // const month = (date.getMonth() + 1).toString().padStart(2, '0')
        // const year = date.getFullYear()

        // const fullDate = `${year}-${month}-${day}`

        const fullDate = date.toISOString().slice(0, 10)

    
    const newTodo = {
        title: title,
        description: description,
        done: done,
        dueDate: dueDate,
        updatedDate: null,
        id: uuid(),
        date: fullDate,
    }

    if (editData) {
        newTodo.id = editData.id
        newTodo.date = editData.date
        newTodo.updatedDate = fullDate
    } 

    onNewTodo(newTodo)

    setTitle('')
    setDescription('')
    setDone(false)
    setDueDate('')
}

  return (
    <form onSubmit={newTodoHandler}>
        <div className="form-control">
            <label htmlFor="title">Title:</label>
            <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={titleHandler}
            ></input>
        </div>

        <div className="form-control">
            <label htmlFor="description">Description:</label>
            <textarea
            type="text"
            id="description"
            name="description"
            value={description}
            onChange={descriptionHandler}
            ></textarea>
        </div>

        <div className="form-control">
            <input
            type="checkbox"
            id="done"
            name="done"
            checked={done}
            onChange={doneHandler}
            ></input>
            <label htmlFor="done">Done:</label>
        </div>

        <div className="form-control">
        <label htmlFor="date">Date:</label>
            <input
            type="date"
            id="date"
            name="date"
            value={dueDate}
            onChange={dateHandler}
            ></input>
        </div>
        <input type="submit" value={editData ? 'Edit' : 'Create'} />
    </form>
  )
}

export default TodoForm