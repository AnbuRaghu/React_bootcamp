import React from "react"
import Menu from "./Menu"
import Favorite from "./Favorite"
import Toggler from "./Toggler"

function App() {
    return (
        <div>
            <Toggler defaultOnValue={true}>
                {({on, toggle}) => {
                    return (
                    <Menu on={on} toggle={toggle}/>
                )}}
            </Toggler>
            <hr />
            <Favorite />
        </div>
    )
}

export default App