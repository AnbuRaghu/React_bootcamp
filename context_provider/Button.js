import React from "react"
import PropTypes from "prop-types"
//import ThemeContext from "./themeContext" it should be a named import
import {ThemeContextConsumer} from "./themeContext"

function Button(props) {
    return (
        <ThemeContextConsumer>
            {theme => (
                <button className={`${theme}-theme`}>Switch Theme</button>
            )}
        </ThemeContextConsumer>
    )    
}

export default Button
