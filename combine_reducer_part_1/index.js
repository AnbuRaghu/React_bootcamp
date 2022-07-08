const redux = require("redux")

const store = redux.createStore(reducer)

store.subscribe(() => {
    console.log(store.getState())
})


// we split the whole reducer into multiple parts and have each one of reduer be cahrge of only one part of sTATE..WE are gonna have count reducer ,favouritething reducer and youtubevideo reducer and we will combine those reducer called combined reducer here the code will be broken as we only pass reducer to the store const store = redux.createStore(reducer) actually we don't have this reducer next part e will look and make our code run