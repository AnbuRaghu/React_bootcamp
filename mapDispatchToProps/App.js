import React from "react"
import {connect} from "react-redux"
import {increment,decrement} from './redux'

function App(props) {    
    return (
       /* <div>
            <h1>{props.count}</h1>
            <button onClick={props.oranges}>-</button>
            <button onClick={props.apples}>+</button>
        </div>*/
        
        <div>
            <h1>{props.count}</h1>
            <button onClick={props.decrement}>-</button>
            <button onClick={props.increment}>+</button>
        </div>
    )
}

// Write the mapStateToProps function from scratch
// Takes the global state from Redux as a parameter
// returns an object where the keys are the name of the prop your component wants,
// and the values are the actual parts of the global state your component wants
function mapStateToProps(state) {
    return {
        count: state
    }
}
// mapDispatchToProps is an object.. the idea of mapDispatchToProps is somwhat similar to mapStateToProps the key  of the object is the props we want to pass to our component the value willl be the action we want to dispatch through reducer
/*const mapDispatchToProps = {
    oranges:increment,
    apples:decrement
}*/
// in simple mapdispatchtoprops job is to map our action to our component 


// in real world we dont use applea and orange so we can change it as below

/*const mapDispatchToProps = {
    increment:increment,
    decrement:decrement
}*/




 //we can still reduce it 
 
 
 const mapDispatchToProps = {
    increment,// as key and value are same we can omit key
    decrement
}
//export default connect(mapStateToProps,mapDispatchToProps)(App)
export default connect(mapStateToProps,{increment,decrement})(App)