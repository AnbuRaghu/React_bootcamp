import React from "react"
import ThemeContext from "./themeContext"
import PropTypes from "prop-types"

function Button(props) {
    return (
        <button className={`${props.theme}-theme`}>Switch Theme</button>
    )    
}

Button.propTypes={
    theme:PropTypes.oneOf(['light','dark'])
}
Button.defaultProps={
    theme:'light'
}

export default Button
// if we dont't want  our every button use the context we can just wrap the button which want context value.. in this case we just want the 1st instance of the button accessible of context that's y we wrap the button with consumer and return the button element

//and we can make use of propTypes and defaultProps to check the props value is passed for every button instances