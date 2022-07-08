import React from "react"
import Die from "./Die"
import {nanoid} from "nanoid"
import Confetti from "react-confetti"

/**
 * Challenge:
 * 
 * Create state to hold our array of numbers. (Initialize
 * the state by calling our `allNewDice` function so it 
 * loads all new dice as soon as the app loads)
 * 
 * Map over the state numbers array to generate our array
 * of Die elements and render those in place of our
 * manually-written 10 Die elements.
 */
/**
 * Challenge: Update the array of numbers in state to be
 * an array of objects instead. Each object should look like:
 * { value: <random number>, isHeld: false }
 * 
 * Making this change will break parts of our code, so make
 * sure to update things so we're back to a working state
 */

export default function App() {
    const [dice, setDice] = React.useState(allNewDice())// we initialize the dice array by calling the allNewDice()
    // we return a allNewDice function with an array of a random numbers from 1-6
    // then we initialize a state with the array's value like this   const [dice, setDice] = React.useState(allNewDice())
    
 const [tenzies, setTenzies] = React.useState(false)
 // the another common reason to use useEffect i if 2 states are sync in internal is a common reason for using useEffect here tenzies and dice states are sync with each other
   React.useEffect(() => {
        const allHeld = dice.every(die => die.isHeld)// every method return true if every item in an array returns true according true condition,here we check if all dice are held
        const firstValue = dice[0].value// we get the first value as reference to check all values are same
        const allSameValue = dice.every(die => die.value === firstValue)
        if (allHeld && allSameValue) {
            setTenzies(true)
            console.log("You won!")
        }
    }, [dice])
/**
 * Challenge: Check the dice array for these winning conditions:
 * 1. All dice are held, and
 * 2. all dice have the same value
 * 
 * If both conditions are true, set `tenzies` to true and log
 * "You won!" to the console
 */
    
    
    
     function generateNewDie() {
        return {
            value: Math.ceil(Math.random() * 6),
            isHeld: false,
            id: nanoid()
        }
    }
    
    function allNewDice() {
        const newDice = []
        for (let i = 0; i < 10; i++) {
          //  Update the array of numbers in state to be
         //    an array of objects instead,we pass an object literal when we push the array
           /* newDice.push({
                value: Math.ceil(Math.random() * 6), 
                isHeld: true,
                id: nanoid()
            })*/
            // as the above push() we need again in rollDice() to avoid code repeatation we can create a function  and call the function 
            
            newDice.push(generateNewDie())
        }
        return newDice
    }
    // we set the dice array again by calling the allnewDice() which returns an array of random numbers every time the button is clicked
   /*  function rollDice() {
        setDice(allNewDice())
    }
    */
    
    
    
    /**
 * Challenge: Update the `rollDice` function to not just roll
 * all new dice, but instead to look through the existing dice
 * to NOT role any that are being `held`.
 * 
 * Hint: this will look relatively similiar to the `holdDice`
 * function below. When creating new dice, remember to use
 * `id: nanoid()` so any new dice have an `id` as well.
 */
    function rollDice() {
            if(!tenzies) {// we check if tenzies is not true then run roll function
        setDice(oldDice => oldDice.map(die => {
            return die.isHeld ? 
                die : // we check if the isHeld is true and keep the old value as it is else we generate new array with random value
                generateNewDie()
        }))
         } else {
            setTenzies(false)
            setDice(allNewDice())
        }
    }
    
    
   
    /**
 * Challenge: Update the `holdDice` function to flip
 * the `isHeld` property on the object in the array
 * that was clicked, based on the `id` prop passed
 * into the function.
 * 
 * Hint: as usual, there's > 1 way to accomplish this.
 * I'll be using `dice.map()` and checking for the `id`
 * of the die to determine which one to flip `isHeld` on,
 * but you can do whichever way makes the most sense to you.
 */
    function holdDice(id) {
       setDice(oldDice => oldDice.map(die=> {
            return die.id === id ? {
                ...die,
                isHeld:!die.isHeld
            } :die
       
        }) )
          
       
    }
   
    
    const diceElements = dice.map(die => (
        <Die 
            key={die.id} 
            value={die.value} 
            isHeld={die.isHeld} 
            holdDice={() => holdDice(die.id)}
        />
    ))
    
    
    return (
       <main>
            {tenzies && <Confetti />}
            <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. 
            Click each die to freeze it at its current value between rolls.</p>
            <div className="dice-container">
                {diceElements}
            </div>
            <button 
                className="roll-dice" 
                onClick={rollDice}
            >
                {tenzies ? "New Game" : "Roll"}
            </button>
        </main>
    )
}