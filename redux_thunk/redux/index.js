

/*redux thunk allows our action creator to work asynchronously*/
 
import redux, {createStore, applyMiddleware} from "redux"
import thunk from "redux-thunk"// it's an middleware so we need to pull applymiddleware function from redux and we have to call the function while creating store and pass the thunk to it like below

export function increment() {
      // API call to get the current count
   // instead of returning an object FROM our action creators it enables the ability to return a function from our action creators.this is beneficial bcz the function is going to be given the dispatcher and in the body of the function we can do all sorts of async stuff first then we can use this dispatch function to dispatch our action like this   dispatch({type: "INCREMENT"})
   
   // instead of returning an object bx´cz of thu nk we return a function.this function under the hood is going to get call with this dispatch property which is the same dispatch we used on the button click means stores dispatch()f.k
    return (dispatch) => {
        setTimeout(() => {
            dispatch({type: "INCREMENT"})// this is the dispatch we received via params we can name it what ever we want
        }, 1500)
    }
}

export function decrement() {
    return {
        type: "DECREMENT"
    }
}

function reducer(count = 0, action) {
    switch(action.type) {
        case "INCREMENT":
            return count + 1
        case "DECREMENT":
            return count - 1
        default:
            return count
    }
}
// createStore() allows us to pass 2nd params we pass the applymiddleware function and pass the thunk to it
const store = createStore(reducer, applyMiddleware(thunk))
store.subscribe(() => console.log(store.getState()))
export default store
