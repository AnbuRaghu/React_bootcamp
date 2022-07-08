import React, {useState} from "react"

/**
 * Challenge:
 * 
 * Create a function to calculate the number of separate words in the `text` state
 * For now, just console.log the word count when the button gets clicked to test it out.
 */

function App() {
    const [text, setText] = useState("")
    
    function handleChange(e) {
        const {value} = e.target
        setText(value)
    }
    // counting words in a string
    function calculateWordCount(words) {
        const wordsArr = words.trim().split(" ")
        const filteredArr= wordsArr.filter(word => word !== "")// returns the word that are not equak to empty string
         return filteredArr.length
    }
    
    return (
        <div>
            <h1>How fast do you type?</h1>
            <textarea
                onChange={handleChange}
                value={text}
            />
            <h4>Time remaining: ???</h4>
            <button onClick={() => console.log(calculateWordCount(text))}>Start</button>
            <h1>Word count: ???</h1>
        </div>
    )
}

export default App
