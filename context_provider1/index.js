import React from "react"
import ReactDOM from "react-dom"

import App from "./App"

// the very 1st thing we have to do is to create context.we do this by using Reaact.createContext()

// when we use createContext() we get back is what called a compound component which means ThemeContext is an object and it has couple of property whose properties are components
// ThemeContext.Provider & ThemeContext.Consumer

const ThemeContext = React.createContext()
// we can also destructure it as below
//const{Provider,Consumer}=ThemeContext;
ReactDOM.render(
    
    // there is one more thing what we have to passs to provider.. there is aprops we have to pass alwasy is called value props this is enough simply we try to save
    <ThemeContext.Provider value={"light"}>
    <App />
    </ThemeContext.Provider>, document.getElementById("root"))
