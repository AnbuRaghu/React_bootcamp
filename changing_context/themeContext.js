import React, {Component} from "react"
const {Provider, Consumer} = React.createContext()

/**
 * Challenge:
 * 1) Add state to hold the current theme
 * 2) Add a method for flipping the state between light and dark
 * 
 */

class ThemeContextProvider extends Component {
    state={
        theme:'dark'
    }
    // how to pass the flip function to the consumer that needed the anser is we can pass in our provider via value props as object we can passs as many property we need
   flip = () => {
        this.setState(prevState => {
            return {
                theme: prevState.theme === "light" ? "dark" : "light"
            }
        })
    }
    render() {
        return (
            // in value props we vcan pass as many value we need as an object like below
            <Provider value={{theme:this.state.theme,flip:this.flip}}>
                {this.props.children}
            </Provider>
        )
    }
}

export {ThemeContextProvider, Consumer as ThemeContextConsumer}
