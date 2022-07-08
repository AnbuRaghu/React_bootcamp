 
 //usually it's convention to name the custom hooks starts with 'use' key word in this case it's useCounter
 // custom hooks is much simpler than render props and higher ordr component when dealing with SAME REPEATING OPERATION
 
 // what this custom hooks will do
    // initialize state
    // create any functions we need for modifying the state
    // return whatever we want another component to have access to (count, increment)

import {useState} from "react" // here i dont import react bcz we don't use any jsx
export default function useCounter() {
    const [count, setCount] = useState(0)
    
    function increment() {
        setCount(prevCount => prevCount + 1)
    }
  
   // return {count, increment} 
   // here we return an object.. by returning an object we don't give flexibility to change somethiung when importing. for example const {count,increment}= useCounter() in this we can't rename our properties when importing and destructuring.. but if we use or return an array we can rename this things as we want as array doesnt work on property whereas on index based
   
   return [count,increment]
}