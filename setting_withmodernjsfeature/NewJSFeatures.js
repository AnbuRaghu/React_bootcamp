import React, {Component} from "react"

class NewJSFeatures extends Component {
   /* constructor() {
        super()
        this.state = {
            count: 0
        }
    }*/
    // we can now avoid constructor and we can just set our variable state like below especially when we are using arrow function which doesn't require binding in constructor
     state = {
        count: 0,
        greeting:'hi',
        age:31
    }
    
    
    increment = () => {
        this.setState(prevState => ({count: prevState.count + 1}))
    }
    
    decrement = () => {
        this.setState(prevState => {
            return {
                count: prevState.count - 1
            }
        })
    }
    
    render() {
        
        //object destructuring:the advantage of this is to we can rename our variables like below
        const {count:number,greeting,age}=this.state;// here we just rename the count variable as number and refer the number on dom
        return (
            <div>
                <h1>{number}</h1>
                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement}>-</button>
            </div>    
        )
    }
}

export default NewJSFeatures