import React from "react"
import {connect} from "react-redux"

function App(props) {    
    return (
        <div>
            <h1>{props.bananas}</h1>
            <button>-</button>
            <button>+</button>
        </div>
    )
}

// the first thing we want to pass to connect is a function often times it's called mapStatetoProps

//what this function does is to receive a global state from redux and returns

function mapStateToProps(globalState) {
    // return an object where the keys are the name of the prop your component wants,
    // values are the actual parts of the global state your component wants
    // when we finish this function we habe to pass the whole function as 1st params for the connect function
    
  /*  return {
        bananas:'hello', // if i banansa here means the key is is accecible via props called props.banans
    }*/
    // what i'm here saying is i want to give my app component a props called bananas and i want the value is whatever in the current global state
     return {
        bananas:globalState, // here global state is the count value 
    }
}
// as name defines the job of mapstatetoprops is to map the state to props of the component we want
export default connect(mapStateToProps,{})(App)
// and mapStateToProps's job is to make it so that it passes props that includes the parts of state your component needs