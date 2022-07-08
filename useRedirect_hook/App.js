import React, {useState} from "react"
import {Link, Switch, Route, Redirect} from "react-router-dom"

// https://reacttraining.com/react-router/web/example/auth-workflow
// there are many ways to redirect a page like we seen before for exmple using pushing useHistory etc. Redirect also one of the waa to redirect user here all we have to do is rendering an <Redirect component comes from react and set to atribute to it where we want to redirect

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/private">Private</Link>
            
            <Switch>
                <Route exact path="/">
                    <h1>Home page, anyone is allowed here</h1>
                </Route>
                <Route path="/private">
                    {
                        isLoggedIn ?
                        <h1>Protected page, must be logged in to be here</h1> :
                        <Redirect to="/login" />
                    }
                </Route>
                <Route path="/login">
                    <button onClick={() => setIsLoggedIn(true)}>Log in</button>
                </Route>
            </Switch>
        </div>
    )
}

export default App