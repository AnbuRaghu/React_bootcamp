import React, {useState, useEffect} from "react"

/**
 * Challenge:
 * 
 * Make it so clicking the Start button starts the timer instead of it starting on refresh
 * (Hint: use a new state variable to indicate if the game should be running or not)
 */

function App() {
    const [text, setText] = useState("")
    const [timeRemaining, setTimeRemaining] = useState(5)
    const [istimingRunning,setIstimingRunning]=useState(false)// we check if the timer is on or not 
    
    function handleChange(e) {
        const {value} = e.target
        setText(value)
    }
    
    function calculateWordCount(text) {
        const wordsArr = text.trim().split(" ")
        return wordsArr.filter(word => word !== "").length
    }
    
    function start(){
        setIstimingRunning(true)
       
    }
    
    useEffect(() => {
        if(timeRemaining > 0 && istimingRunning === true) {
            setTimeout(() => {
                setTimeRemaining(time => time - 1)
            }, 1000)
           
        } else if(timeRemaining === 0){ // we set if the timeremaing == o   setIstimingRunning false again
            setIstimingRunning(false)
        }
        
    }, [timeRemaining,istimingRunning])
     console.log(istimingRunning,'mmmm')
    return (
        <div>
            <h1>How fast do you type?</h1>
            <textarea
                onChange={handleChange}
                value={text}
            />
            <h4>Time remaining: {timeRemaining}</h4>
            <button onClick={start}>Start</button>
            <h1>Word count: ???</h1>
        </div>
    )
}

export default App
