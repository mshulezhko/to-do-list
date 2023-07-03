// import { useState } from 'react'

export default function ToDoList(props) {
    // const [todos, setToDos] = useState([...props.todos])

    function toggleToDo(id, isCompleted) {
        props.setToDos(currentItems => {
            return currentItems.map(item => {
                if (item.id === id) {
                    return { ...item, isCompleted }
                }

                return { ...item }
            })
        })
    }

    function Delete(id) {
        props.setToDos(currentItems => {
            return currentItems.filter(item => {
                return item.id !== id
            })
        })
    }

    return <ul className='list'>
        {
            props.todos.map((todo => {
                return <li key={todo.id}>
                    <label>
                        <input type="checkbox" checked={todo.isCompleted} onChange={e => toggleToDo(todo.id, e.target.checked)} />
                        {todo.title}
                    </label>
                    <button onClick={e => Delete(todo.id)}>delete</button>
                </li>

            }))
        }
    </ul>
}