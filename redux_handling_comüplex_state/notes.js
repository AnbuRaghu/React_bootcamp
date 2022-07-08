const redux = require("redux")
// we may have different type of state or different piece of state in our app thqt we want to hold with redux..let's say if my application waana keep trac of an array of favourite things?? what we do we set our initial state in seperate variable and le's starts with new action creator called addFavoriteThing
function changeCount(amount = 1) {
    return {
        type: "CHANGE_COUNT",
        payload: amount
    }
}


function addFavoriteThing(thing) {
    return {
        type: "ADD_FAVORITE_THING",
        payload: thing
    }
}

const initialState = {
    count: 0,
    favoriteThings: []
}

function reducer(state = initialState, action) {
    switch(action.type) {
        case "CHANGE_COUNT":
            return {
                ...state,
                count: state.count + action.payload
            }
          /*  // if we add a case like this we'll loose our previous states values int thiss case
              case "ADD_FAVORITE_THING":
                 return {
                favoriteThings: ["thing 1"]
            }
            {count: 2}
›           {favoriteThings: ["thing 1"]}.   2nd time we don't get our count state*/
            /** if we use like this means if we try to add favourite thing like this there are 2 wrongs with this here we don't use pure function we originally mutating the original version means my favouritthings array in state to fix this we can use the spread operator like in object to create array */
            
                /* 
             case "ADD_FAVORITE_THING":
            return {
                ...state,
                favoriteThings: state.favoriteThings.push(action.payload)
            }*/
            
             case "ADD_FAVORITE_THING":
            return {
                ...state,
                 /*here we say use all old values from previous state.favouritething and add my action.payload to it */
                favoriteThings: [...state.favoriteThings, action.payload]
            }
        default:
            return state
    }
}

const store = redux.createStore(reducer)
store.subscribe(() => {
    console.log(store.getState())
})


store.dispatch(changeCount(2))
store.dispatch(addFavoriteThing("Raindrops of roses"))
store.dispatch(addFavoriteThing("Whiskers on kittens"))



/** if we have multiple part of state, we have to manually update the other parts of state too even if they are not concerning to us in this case our other part of states are count and favouritethings... what i mean is when we add things to our favourite things, we can't simply return an object to our favourite things and expect our count will stick around..so when I'm adding a favourite thing i want to make sure that all the other part of state i'm keeping like this ...state spreading the state,whatever state i want to uodate i need to make sure i keep all the other part of state
 * 
 * 
 * 
 *              return {
                ...state,
                favoriteThings: ["thing 1"]
            }
                const initialState = {
                 count: 0,
                favoriteThings: []
                }
 * 
 * 
 * 
 * 
 * 
 * 
 */