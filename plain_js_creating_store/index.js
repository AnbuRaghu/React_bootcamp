const redux = require("redux")

function increment() {
    return {
        type: "INCREMENT"
    }
}

function decrement() {
    return {
        type: "DECREMENT"
    }
}

function reducer(state = {count: 0}, action) {
    // return new state based on the incoming action.type
    switch(action.type) {
        case "INCREMENT":
            return {
                count: state.count + 1
            }
        case "DECREMENT":
            return {
                count: state.count - 1
            }
        default:
            return state
    }
    console.log(state)
}

// creating store here createStore function takes 1 params that is the reducer function.. the reducer is initiatedt here only we hand over our reducer to redux and redux will return some cool stuff as follows
/*dispatch: dispatch(action), subscribe: subscribe(listener), getState: getState(), replaceReducer: replaceReducer(nextReducer*/
const store = redux.createStore(reducer)
console.log(store)

