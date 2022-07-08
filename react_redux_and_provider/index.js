import React from "react"
import ReactDOM from "react-dom"
import {Provider} from "react-redux"// PROVIDER IS A REACT COMPONENT WHICH WE HAVE TO WRAP OUR APP LiKE BELOW
import store from './redux'


import App from "./App"
console.log(store)
ReactDOM.render(
    //Provider takes a parameter called store
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById("root")
)
