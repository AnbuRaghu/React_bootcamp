import React from "react"
import Menu from "./Menu"
import Favorite from "./Favorite"
import Toggler from "./Toggler"

function App() {
    return (
       <div>
            <Toggler defaultOnValue={true} render={({on, toggle}) => {// we pass the props down to Menu again
                return (
                    <Menu on={on} toggle={toggle}  />
                )
            }}/>
            <hr />
            <Favorite />
        </div>
    )
}

export default App