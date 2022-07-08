import React from "react"
import {Link} from 'react-router-dom'
// link is like anchor tag it take an attriubute called to

function App() {    
    return (
        <div>
            <Link to='/'> home </Link>
             <Link to='/about'> ABOUT </Link>
        </div>
    )
}

export default App