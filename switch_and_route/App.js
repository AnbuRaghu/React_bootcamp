import React from "react"
import {Link, Switch, Route} from "react-router-dom"

import Home from "./Home"
import About from "./About"

function App() {    
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
          {/*
           we are gonne fill with switch component with route component bssed on the part of rout switch component will determine which component should be rendered..
           2.there are 3 different ways to use routes..
           1.1st way is to use a self closing route component and we use render props method to render a jsx  exact key word is important for home component*/}
               {/*  <Switch>
                <Route exact path='/' render={()=> <h1>Home page</h1>}/>
                <Route  path='/about' render={()=> <h1>About page</h1>}/>
            </Switch>*/}
              {/* the 2nd way is i can create sepereate home and about component and render it via render props way as well as anouher api way called component THAT'S TO SAY I CAN PASS THE component as propscalled component*/}
              
            {/*  <Switch>
              
              <Route exact path='/' render={()=> <Home/>}/> 
               <Route  path='/about' render={()=> <About/>}/> 
               
              </Switch>*/}
              
                {/*  here we dont pass the instance of component like abouve instead we gonna pass the function itself. like this component={Home} it's a replacement for render props method but here we can't pass custom props for our component if we want to pass custom props to our component then we can use renderprops method else component way*/}
                {/*   <Switch>
              
              <Route exact path='/' component={Home}/> 
               <Route  path='/about' component={About}/> 
               
              </Switch>*/}
              
                 {/* the newest way of routin is we can use children.. that means instead of using self closing routes we can use opening and end tag routes and we can pass our component instance what nice abour this way is we can pass custom props for our component if we want to like below this is the most updated way to use routes*/}
                 <Switch>
                  <Route exact path='/'> 
                  <Home name={'Anbu'}/> 
                  </Route> 
                    <Route  path='/about'> 
                    <About/> 
                    </Route> 
                     </Switch>
            
        </div>
    )
}

export default App