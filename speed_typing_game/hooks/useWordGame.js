
// we just created our custom hooks and we returned the values which neede for our component


import {useState, useEffect, useRef} from "react"

function useWordGame(startingTime = 10) {
   // const STARTING_TIME = 5 // instead of hard coding this we can give parameters
    
    const [text, setText] = useState("")
   // const [timeRemaining, setTimeRemaining] = useState(STARTING_TIME)
      const [timeRemaining, setTimeRemaining] = useState(startingTime)
    const [isTimeRunning, setIsTimeRunning] = useState(false)
    const [wordCount, setWordCount] = useState(0)
    const textBoxRef = useRef(null)
    
    function handleChange(e) {
        const {value} = e.target
        setText(value)
    }
    
    function calculateWordCount(text) {
        const wordsArr = text.trim().split(" ")
        return wordsArr.filter(word => word !== "").length
    }
    
    function startGame() {
        setIsTimeRunning(true)
        setTimeRemaining(startingTime)
        setText("")
        setWordCount(0)
        textBoxRef.current.disabled = false
        textBoxRef.current.focus()
    }
    
    function endGame() {
        setIsTimeRunning(false)
        setWordCount(calculateWordCount(text))
    }
    
    useEffect(() => {
        if(isTimeRunning && timeRemaining > 0) {
            setTimeout(() => {
                setTimeRemaining(time => time - 1)
            }, 1000)
        } else if(timeRemaining === 0) {
            endGame()
        }
    }, [timeRemaining, isTimeRunning])
    
    return {textBoxRef, handleChange, text, isTimeRunning, timeRemaining, startGame, wordCount} //we returned the values which neede for our component
}

export default useWordGame
