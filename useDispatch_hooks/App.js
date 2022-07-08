import React from "react"
import {useSelector, useDispatch} from "react-redux"
import {increment, decrement} from "./redux"

function App(props) {
    const count = useSelector(state => state)
    const dispatch = useDispatch()// it doesn't take any params it just returns the dispatch method of store
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => dispatch(decrement())}>-</button>
            <button onClick={() => dispatch(increment())}>+</button>
        </div>
    )
}
// useDispatch is the kind of replacement for mapdispatchtoprops means 2nd params in our connect()
// export default connect(state => ({count: state}), {increment, decrement})(App)
export default App

// https://thoughtbot.com/blog/using-redux-with-react-hooks
// https://react-redux.js.org/api/hooks#usage-warnings