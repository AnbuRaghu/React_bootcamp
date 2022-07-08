import React from "react"

function Home(props) {
    /*if we use this way of roiúting that' is to say   <Route exact path="/" component={Home} /> react automatically pass some props which we can see down amd if we use renderprops way we can pass the props to our function and destructure it   <Route 
                    exact 
                    path="/" 
                    render={
                        ({match, location, history, staticContext}) => (
                            <Home />
                        ) />
                        
                        but if we use new way of routing which is using children,it'not possible to get the default props shown below to solve this react introduced some hooks  such as
                        import {useLocation, useParams, useHistory, useRouteMatch} from "react-router-dom"*/
    console.log(props)
    return (
        <h1>Home Page</h1>
    )
}

export default Home

// {
//     history: {
//         length: 32, 
//         action: "POP", 
//         location: {
//             pathname: "/", 
//             search: "", 
//             hash: "", 
//             state: null
//         }, 
//         createHref: createHref(location), 
//         push: push(path, state), 
//         replace: replace(path, state), 
//         go: go(n), 
//         goBack: goBack(), 
//         goForward: goForward(), 
//         block: block(prompt), 
//         listen: listen(listener)
//     }, 
//     location: {
//         pathname: "/", 
//         search: "", 
//         hash: "", 
//         state: null
//     }, 
//     match: {
//         path: "/", 
//         url: "/", 
//         isExact: true, 
//         params: {}
//     }, 
//     staticContext: null
// }
