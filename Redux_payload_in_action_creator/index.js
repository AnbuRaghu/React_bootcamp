const redux = require("redux")

// i can also simplify the whole setup here by renaming the function and accepting positive and negative value to the fuction and get rid of two action creators AND CREATE ONE ACTION CREAATOR CALLED CHANGECOUNT LIKE BELOW

/*function increment(amount) {
    return {
        type: "INCREMENT",
        payload: amount
    }
}

function decrement() {
    return {
        type: "DECREMENT"
    }
}*/
// we can also give default params here when we call the function,if we dont specify the value

//function changeCount(amount=1){ while calling store.dispatch(changeCount())
function changeCount(amount){
    return{
        type:'CHANGE_AMOUNT',
        payload:amount
    }
}

function reducer(state = {count: 0}, action) {
    // return new state based on the incoming action.type
    switch(action.type) {
        case "CHANGE_AMOUNT":
            return {
                count: state.count + action.payload
            }
        default:
            return state
    }
}

const store = redux.createStore(reducer)
store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(changeCount(5))
store.dispatch(changeCount(5))
store.dispatch(changeCount(-3))