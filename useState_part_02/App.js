import React, {useState} from "react"

// the usestate have 2 value 1 one is the initial state 2nd is the function which allows us to change the state

function App() {
    const [count, setCount] = useState(0)
    
    function increment() {
        setCount(prevCount => prevCount + 1)
    }
      function decrement() {
        setCount(prevCount => prevCount - 1)
    }
    
    return (
        <div>
            <h1>{count}</h1>
            <div className='div'>
            <button onClick={increment}>Increment</button>
             <button onClick={decrement}>Decrement</button>
                    </div>
        </div>
    )
}



export default App
