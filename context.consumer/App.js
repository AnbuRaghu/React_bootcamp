import React from "react"

import Header from "./Header"
import Button from "./Button"
import ThemeContext from "./themeContext"

function App() {
    return (
        <div>
            <Header />
            <ThemeContext.Consumer>
                {theme => (
                    <Button theme={theme} />
                )}
            </ThemeContext.Consumer>
            
            <Button  />
        </div>
    )
}

export default App
// if we dont't want  our every button use the context we can just wrap the button which want context value.. in this case we just want the 1st instance of the button accessible of context that's y we wrap the button with consumer and return the button element

//and we can make use of propTypes and defaultProps to check the props value is passed for every button instances