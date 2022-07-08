import React from "react"
import {UserContextConsumer} from "./userContext"

function Header() {
    return (
        <header>
            <UserContextConsumer>
            {/* we destructure the username*/}
                {({username}) => (
                    <p>Welcome, {username}!</p>
                )}
            </UserContextConsumer>
        </header>
    )
}

export default Header
