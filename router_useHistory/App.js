import React from "react"
import Header from "./components/Header"
import Home from "./pages/Home"
import ServicesList from "./pages/services/ServicesList"
import ServiceDetail from "./pages/services/ServiceDetail"

import {Switch, Route} from "react-router-dom"

function App() {    
    return (
        <div>
            <Header />
            
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/services" component={ServicesList}/>
                <Route path="/services/:serviceId" component={ServiceDetail}/>
            </Switch>
        </div>
    )
}

export default App