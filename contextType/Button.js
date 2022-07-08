import React, {Component} from "react"
import ThemeContext from "./themeContext"
// there are few differenrt ways to consume context.. the 1st one is simpler and straight forward also restrictive and that is by adding a static property to our class based component called contextType.//contexttype is limited we can use only in calSS COMPONENT IF U HAVE CLASS COMPONENT AND U ONLY NEED TO CONSUME DATA FROM CONTEXT THEN USE THIS ELSE USE CONSUMER PROPERTY
class Button extends Component {
     static contextType = ThemeContext
     

    render() {
          console.log(this.context)
                 const theme = this.context
        return (
            <button className="light-theme">Switch Theme</button>
        )    
    }
}
Button.contextType = ThemeContext // the babel we use to compile is allow us to use some experimental property we can use static property in class like above ' static contextType = ThemeContext

// by setting this contextType on Button class now I have a property here called this.context and the value of this.context is going to be whatever value  we passed in to our provider 
export default Button