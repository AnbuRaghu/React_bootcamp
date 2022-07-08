import React, { useContext } from "react"
import { ThemeContext } from "./themeContext"

function Button(props) {
    const context = useContext(ThemeContext)// here we have to pass the entire context object
    return (

        <button onClick={context.toggleTheme} className={`${context.theme}-theme`}>Switch Theme</button>

    )

    /*
    instead of using the renderprops method we cn simply use as above with the help of useContext
     <ThemeContextConsumer>
            {context => (
                <header className={`${context.theme}-theme`}>
                    <h2>{context.theme === "light" ? "Light" : "Dark"} Theme</h2>
                </header>
            )}
        </ThemeContextConsumer>
     */
}

export default Button
