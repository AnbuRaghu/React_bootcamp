import React from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Profile from "./pages/profile/Profile"
import Settings from "./pages/profile/Settings"
import Info from "./pages/profile/Info"
import {Switch, Route} from "react-router-dom"

function App() {    
    return (
        <div>
            <Header />
            
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                
                {/* heere exact is important as we render /profile/info .../profile/settings if we click on each one of these it will look for 1st profile match  and  render only this /profile*/}
                <Route exact path="/profile">
                    <Profile/>
                </Route>
          
                <Route path="/profile/info">
                    <Info/>
                </Route>
                <Route path="/profile/settings">
                    <Settings/>
                </Route>
            </Switch>
            
            <Footer />
        </div>
    )
}

export default App
