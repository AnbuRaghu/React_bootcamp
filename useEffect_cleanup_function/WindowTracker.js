import React from "react"

export default function WindowTracker() {
    
    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth)
    
    React.useEffect(() => {
        function watchWidth() {
            console.log("Setting up...")
            setWindowWidth(window.innerWidth)
        }
        
        window.addEventListener("resize", watchWidth)
        
        return function() {
            console.log("Cleaning up...")
            window.removeEventListener("resize", watchWidth)// as our parent component controls the widow tracker when it'should be shown, if our window tracker is set to disply none,the component will be unmountedd but our window lisner function works on the component so we get an warning so to avoid that we make use of the clean up function to remove the eventlisner.in genereal our use effect function is allowed to return a function it's called clean up function
        }
    }, [])
    
    return (
        <h1>Window width: {windowWidth}</h1>
    )
}
