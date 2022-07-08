// componentDidMount
// componentDidUpdate
// componentWillUnmount
// the useEffect is considered to the replacement of above life cycle component in class based component in react
// componentDidMount
// we can call a api req for example
// componentDidUpdate
// we can set the variable in the dependanc array if we wanna update the component
// componentWillUnmount
// we camn also do operation when component unmounts by using the useeffedt clean up function



import React, {useState, useEffect} from "react"
import randomcolor from "randomcolor"

function App() {
    const [count, setCount] = useState(0)
    const [color, setColor] = useState("")
    // we can call useEffect more than once
    // the way we can stop the interval by grabbing the id which returns from setInterval() which allows us to clear interval function
   
    useEffect(() => {
        const intervalId= setInterval(() => {
           setCount(prevCount => prevCount + 1)
            console.log(intervalId)
        }, 1000)
        
        // the function i returned here is going to clear the interval as soon as the component unmount
        return(()=>clearInterval(intervalId))
          
        
    }, [])
    
    useEffect(() => {
        // setInterval(() => {
        //     setCount(prevCount => prevCount + 1)
        // }, 1000)
        
        setColor(randomcolor())
    }, [count])
    
    return (
        <div>
            <h1 style={{color: color}}>{count}</h1>
        </div>
    )
}

export default App
