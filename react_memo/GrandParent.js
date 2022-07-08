import React from "react"
import Parent from "./Parent"

function GrandParent(props) {    
    console.log("[👴🏼]   [ ]   [ ]   [ ] rendered")
    return (
        <div>
            <p>I'm a GrandParent Component</p>
            <Parent />
            <Parent />
        </div>
    )
}

function areEqual(prevProps, nextProps) {
  /*
  return true if passing nextProps to render would return
  the same result as passing prevProps to render,
  otherwise return false
  */
}
// where we can use our the above equla function is as the 2nd params of react.memo higher order componet as below..instead of using it's own is equal function under the hood.it's going to use my own equal function if we pass the function as 2nd params
export default React.memo(GrandParent, areEqual)