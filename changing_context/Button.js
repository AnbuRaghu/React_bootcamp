import React from "react"
import {ThemeContextConsumer} from "./themeContext"

function Button(props) {
    return (
        // here we receive an object called theme from theme we get the properties which we passed in the provider as object
        <ThemeContextConsumer>
        
            {(themeObj) => (
                <button className={`${themeObj.theme}-theme`} onClick={themeObj.flip}>Switch Theme</button>
            )}
        </ThemeContextConsumer>
    )    
}

export default Button
