import React from "react"
import ReactDOM from "react-dom"
import {BrowserRouter as Router} from 'react-router-dom'
// we need to import BrowserRouter from reac-router-dom and actually we rename it 
//in this case BrowserRouter as Router is actually a contextProvider. we need to wrap it aroun d our app like shown below

import App from "./App"

ReactDOM.render(<Router><App /></Router>, document.getElementById("root"))
