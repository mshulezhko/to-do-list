import { useState, useEffect } from 'react'
import ToDoList from './ToDoList'

export default function ToDoForm() {
    const [newItem, setNewItem] = useState('')
    const [todos, setToDos] = useState(() => {
        const localValue = localStorage.getItem('ITEMS')

        if (localValue == null) return []

        return JSON.parse(localValue)
    })

    function handleTodoItems(e) {
        e.preventDefault()
        setToDos([...todos, { title: newItem, id: crypto.randomUUID(), isCompleted: false }])

    }

    useEffect(() => {
        localStorage.setItem('ITEMS', JSON.stringify(todos))
    }, [todos])

    return <>
        <form onSubmit={handleTodoItems}>
            <div className="row">
                <div className="col-6">
                    <label htmlFor="form-input">New Item</label>
                    <input value={newItem} onChange={(e) => { setNewItem(e.target.value) }} type="text" id='form-input' />
                </div>
                <div className="col-3">
                    <input type="submit" className='btn btn-primary btn-lg' value='Add' />
                </div>
            </div>
        </form>
        <h1 className='header'>To do lost {newItem}</h1>
        <ToDoList todos={todos} setToDos={setToDos} />
    </>
}