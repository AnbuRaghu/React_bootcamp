import React from "react"
import ThemeContext from "./themeContext"

function Button(props) {
    return (
        <ThemeContext.Consumer>
            {(user)=>(
                   <button className={`${user}-theme`}>Switch Theme</button>
            )}
        </ThemeContext.Consumer>
     
    )    
}

export default Button
// the way consumer works by using a renderprops that going to be injected in the children element here  <ThemeContext.Consumer> </ThemeContext.Consumer>..here we need to call our function when they call the function, we need to call the function with the context value and what the function going to return is the element we wn to access the value
// in brief
// * consumer should return a function the function takes  the context value as argument and that function should return the jsx element
            
   