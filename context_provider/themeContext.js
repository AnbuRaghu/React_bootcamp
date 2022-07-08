// how can i make sure that our own component ThemeContextProvider is able to render whatever gets put in between our opening and closing tag the answer is{this.props.children}
import React from "react"
//const ThemeContext = React.createContext()
const{Provider,Consumer}=React.createContext()// we get the object that has 2 property whic are Provider,Consumer from React.createContext()

class ThemeContextProvider extends React.Component {
    render() {
         return (
            /*
            <ThemeContext.Provider>
                {this.props.children}
            </ThemeContext.Provider>
               as we destructure the provider we don't have to use like above instead we can use like below
            */
                <Provider value={"dark"}>
                {this.props.children}
            </Provider>
        )
    }
}

//export default ThemeContext
// right now we are default exporting the ThemeContext which come from React.createContext() but we need to export our ThemeContextProvider components too.. how can we do that?
// istead of exporting this s default we should export it as a named export like this export {ThemeContextProvider, ThemeContext.Consumer} if we do so ThemeContext.Consumer we get a syntax error so we need to destructure the consumer and provider from ThemeContext
// when we export we can rename our exports just by using as keyword
// when we import we should use the named import import {ThemeContextConsumer} from "./themeContext"
export {ThemeContextProvider, Consumer as ThemeContextConsumer}