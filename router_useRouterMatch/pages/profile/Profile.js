import React from "react"
import {Link, Switch, Route, useRouteMatch} from "react-router-dom"

import Settings from "./Settings"
import Info from "./Info"

function Profile() {
    //const match = useRouteMatch()
   // console.log(match)
    /** this is what useRouteMatch returns by default 
     * 
     * we arengonna use useRoutMatch if we have nested links we can dynamically name our links and th path for link we use url and for path we use path
    */
    // {
    //     path: "/profile", 
    //     url: "/profile", 
    //     isExact: true, 
    //     params: {}
    // }
   const {path, url} = useRouteMatch()// we can destructure
    return (
        <div>
            <h1>Profile Page</h1>
            <ul>
                <li><Link to={`${url}/info`}>Profile Info</Link></li>
                <li><Link to={`${url}/settings`}>Profile Settings</Link></li>
            </ul>
            
            <Switch>
                <Route path={`${path}/info`}>
                    <Info/>
                </Route>
                <Route path={`${path}/settings`}>
                    <Settings/>
                </Route>
            </Switch>
        </div>
    )
}

export default Profile