import React from "react"
import {connect} from "react-redux" // we have to import the connec to the component in which we wnat to connect


function App(props) {    
    return (
        <div>
            <h1>COUNT GOES HERE</h1>
            <button>-</button>
            <button>+</button>
        </div>
    )
}

export default connect(/* What parts of state do you want? */, /* What actions to dispatch? */)(App)