import React from "react"
import CTA from "./CTA"
// we can make use of children if we wan to use e.g popups thst changes content inside
// the way to use children instead of parsing component self closing <CTA/> we pass <CTA>  </CTA>  we can still pass props to it and in that component we can get that by using props.children
function App() {
    return (
        <div>
            <CTA position="right">
                <h1>This is an important CTA</h1>
                <button>Click me now or you'll miss out!</button>
            </CTA>
            
            <CTA>
                <form>
                    <input type="email" placeholder="Enter email address here"/>
                    <br />
                    <button>Submit</button>
                </form>
            </CTA>
            
             <CTA>
            <p>This is an important CTAThis is an important CTAThis is an important CTAThis is an important CTAThis is an important CTAThis is an important CTAThis is an important CTAThis is an important CTAThis is an important CTAThis is an important CTAThis is an important CTAThis is an important CTAThis is an important CTAThis is an important CTAThis is an important CTA</p>
                <button>Click me now or you'll miss out!</button>
               </CTA>
        </div>
    )
}

export default App