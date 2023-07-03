
export default function ToDoList(props) {
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

    if (props.todos.length <= 0) {
        return 'List empty'
    }

    console.log('props.todos')
    console.log(props.todos)

    return <ul className='list'>
        {
            props.todos.map((todo => {
                return <li key={todo.id}>
                    <label>
                        <input type="checkbox" className='form-check-input' checked={todo.isCompleted} onChange={e => toggleToDo(todo.id, e.target.checked)} />
                        {todo.title}
                    </label>
                    <button className="btn-delete-item" onClick={e => Delete(todo.id)}>delete</button>
                </li>

            }))
        }
    </ul>
}