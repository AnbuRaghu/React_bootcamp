import React, {Component} from "react"
import {ThemeContextConsumer} from "./themeContext"

function Header(props) {
    return (
        <ThemeContextConsumer>
            {themeObj => (
                <header className={`${themeObj.theme}-theme`}>
                    <h2>{themeObj.theme === "light" ? "Light" : "Dark"} Theme</h2>
                </header>
            )}
        </ThemeContextConsumer>
    )    
}

export default Header
