import {useState} from "react"

function useToggler(defaultOnValue = false) {// we can pass any value as function to our custom hooks int his casewe just pass the default props we did in higheerordercomponent and renderprops.also we can just use default parameters if somebody forget to give value
    // Create the state
    const [on,setOn]=useState(defaultOnValue)
    
    
    const toggle = () => {
        setOn(prevState => !prevState)
    }
    return[on,toggle]
    
}

export default useToggler