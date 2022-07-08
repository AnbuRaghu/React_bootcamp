// componentDidMount
// componentDidUpdate
// componentWillUnmount

// Side effects?
// Network request
// Manual DOM manipulation
// Event listeners or timeouts and intervals

import React, {useState, useEffect} from "react"
import randomcolor from "randomcolor"

function App() {
    const [count, setCount] = useState(0)
    const [answer, setAnswer] = useState("Yes")
     const [color, setColor] = useState("")
    
    function increment() {
        setCount(prevCount => prevCount + 1)
    }
    
    function decrement() {
        setCount(prevCount => prevCount - 1)
    }
    
    useEffect(()=>{
        setColor(randomcolor())
    },[])
    
    return (
        <div>
            <h1 style={{color:color}}>{count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    )
}


export default App
