import React from "react"
import ReactDOM from "react-dom"

import App from "./App"
import {ThemeContextProvider} from "./themeContext"

ReactDOM.render(
    <ThemeContextProvider >
        <App />
    </ThemeContextProvider>, 
    document.getElementById("root")
)
// here we are going to create a seperete Provider component and replace that to wrap the app