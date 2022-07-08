// index.js in redux folder is the entry pont for the other files in redux folder..in other word this is the entry pont into redux for my  whole app
// what i would do in this file is the following
// import the separate reducers
// combine the reducers into a single state tree
// create the store
// export the store

// import the separate reducers
const redux = require("redux")
const {combineReducers, createStore} = redux
import countReducer from "./count"
import favoriteThingsReducer from "./favoriteThings"
import youTubeVideoReducer from "./youTubeVideo"

// combine the reducers into a single state tree
// what we pass into combinereducer is an object,the object reperents the structure of our global state.. what we here do is ti turn our root reducer into something that knows to reconstruct the initial state object we pass in seperate reducers so that it's the state for entire tree or entire app

// combine the reducers into a single state tree
const rootReducer = combineReducers({
    //count:countReducer,// ehat we say here iswe should have a global state property called count and the value is set by running the countreducer
    count:countReducer,
    favoriteThings: favoriteThingsReducer,
    youTubeVideo: youTubeVideoReducer
    // these are the initial state we defined in reducers now we make it as global sothat it can be accessed by the whole app
})
// when we create the store we need to pass the rootreducer to our store
// create the store
const store = createStore(rootReducer)

store.subscribe(() => {
    console.log(store.getState())
})
export default store
// export the store