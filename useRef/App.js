import React, {useState, useRef} from "react"

function App() {
    const [newTodoValue, setNewTodoValue] = useState("")
    const [todosList, setTodosList] = useState([])
    const inputRef = useRef(null)// this is how we initialize useRef() and it's prett common to initialize useRef with null
    // dom nodes in react is automatically comes with the props which added by reacct called ref
    // and it's an object it has the property of current
    
    function handleChange(event) {
        setNewTodoValue(event.target.value)
    }
    
    function addTodo(event) {
        event.preventDefault()
        setTodosList(prevTodosList => [...prevTodosList, newTodoValue])
        setNewTodoValue("")
        inputRef.current.focus()
    }
    
    const allTodos = todosList.map(todo => <p key={todo}>{todo}</p>)
    
    return (
        <div>
            <form>
                <input ref={inputRef} type="text" name="todo" value={newTodoValue} onChange={handleChange}/>
                <button onClick={addTodo}>Add todo item</button>
            </form>
            {allTodos}
        </div>
    )
}

export default App