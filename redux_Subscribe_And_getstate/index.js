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
}



// subscribe is a method created by redux that allows us to pass a function to it and inside the fu nction we can perform any kind of operation we want to perform after the change made to the store..really it's subscribing the changes in the store,if the change ever occurs it'll run the function we provide

const store = redux.createStore(reducer)
store.subscribe(() => {
    console.log(store.getState())
})