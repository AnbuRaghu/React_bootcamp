import React from "react"
import {useSelector} from "react-redux"
import {increment, decrement} from "./redux"

function App(props) { 
    const count = useSelector(state => state) // it takes a function as params and return an object means it takes our state and return our state          
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={props.decrement}>-</button>
            <button onClick={props.increment}>+</button>
        </div>
    )
}

// export default connect(state => ({count: state}), {increment, decrement})(App)
export default App
// useSelector essentially a replacement of the 1st part of our connect function means 1st params..it allows us to get pieces of state from global state