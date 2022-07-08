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
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/services" >
                    <ServicesList />
                </Route>
                {/* react router allows us to create variable into our path here. the way i can specify my varible is to put a : and our variable name and our serviceDetail component we have to use the useParams hook as our serviceDetail deals with the dynamic id here instead of setting manually  <Route path="/services/1,  <Route path="/services/2  etc we can set a variable that acts dynamically*/}
                
                  <Route path="/services/:serviceId" >
                    <ServiceDetail />
                </Route>
            </Switch>
        </div>
    )
}

export default App