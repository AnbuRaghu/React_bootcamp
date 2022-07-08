const redux = require("redux")

function increment() {
    return {
        type: "INCREMENT"
    }
}


function decrement(){
    return{
        type:'DECREMENT'
    }
}

// the idea of the reducer is it's a function that return new state..it takes the old version of the state and the action e.g the type property.. the job of action is to describe how the reducer should take the old version of state and create new version of state
//function reducer(oldstate,action) {// we can call it old state too

// we can create a initiL STATE by js default parameter
/*function reducer(state={count:0},action) {
    // the job of reducer is to return new state based on the incoming action.type
    
    if(action.type === 'INCREMENT'){
        return{
            // it should return a brand new object whose property is set to count and set the vaalue as whatever the old version of state plus the job we need
            count:state.count +1
        }
       
    }
     else if(action.type === 'DECREMENT'){
         return{
             count:state.count-1
         }
            
        }
}*/
// but often we don't use if statements instead switch
function reducer(state = {count: 0}, action) {
    // return new state based on the incoming action.type
    switch(action.type) {
        case "INCREMENT":
            return {// important to remember it will return a new object that will update the state
                count: state.count + 1
            }
        case "DECREMENT":
            return {
                count: state.count - 1
            }
            default:// default is must when 1st time store call our reducr function the default must be set to the original version of state in this case the default params
            return state
    }
}




// challange
// Create another action creator to handle decrementing the number

 // add an else if() to this reducer to handle the decrement action