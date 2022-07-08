import React from "react"
import UserContext from "./userContext"

function Header() {

        return (
            <UserContext.Consumer> 
            {(username)=>(
                <header>
                <p>Welcome, {username}!</p>
            </header> 
            )}
            
            </UserContext.Consumer>
           
        )    
    }


export default Header
