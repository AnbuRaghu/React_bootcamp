import React, {Component} from "react"
const {Provider, Consumer} = React.createContext()// here we destructure the Provider and consumer but for useContext we need the entire object so we have to do as below
const ThemeContext = React.createContext()

/**
 * Challenge:
 * 1) Add state to hold the current theme
 * 2) Add a method for flipping the state between light and dark
 * 
 */

class ThemeContextProvider extends Component {
    state = {
        theme: "dark"
    }
    
    toggleTheme = () => {
        this.setState(prevState => {
            return {
                theme: prevState.theme === "light" ? "dark" : "light"
            }
        })
    }
    
    render() {
        return (
            <ThemeContext.Provider value={{theme: this.state.theme, toggleTheme: this.toggleTheme}}>
                {this.props.children}
            </ThemeContext.Provider>
        )
    }
}

//export {ThemeContextProvider, Consumer as ThemeContextConsumer} // we don't need to export consumer we just export the ThemeContext
export {ThemeContextProvider,ThemeContext}
