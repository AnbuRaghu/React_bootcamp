const redux = require("redux")

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

function removeFavoriteThing(thing) {
    return {
        type: "REMOVE_FAVORITE_THING",
        payload: thing
    }
}

function setYouTubeTitle(title) {
    return {
        type: "SET_YOUTUBE_TITLE",
        payload: title
    }
}

function upvoteVideo() {
    return {
        type: "UPVOTE_VIDEO"
    }
}

function downvoteVideo() {
    return {
        type: "DOWN_VOTE_VIDEO"
    }
}

const initialState = {
    count: 0,
    favoriteThings: [],
    youtubeVideo: {
        title: "",
        viewCount: 0,
        votes: {
            up: 0,
            down: 0
        }
    }
}
console.log(initialState)

/**
 * Challenge:
 * Implement an action creator and reducer case to handle upvoting our YouTube video (+1)
 */

function reducer(state = initialState, action) {
    switch(action.type) {
        case "CHANGE_COUNT":
            return {
                ...state,
                count: state.count + action.payload
            }
        case "ADD_FAVORITE_THING":
            return {
                ...state,
                favoriteThings: [...state.favoriteThings, action.payload]
            }
        case "REMOVE_FAVORITE_THING": {
            //const arrCopy = [...state.favoriteThings] // we can als0 copy the array and we can perform mutating and update the array as we copy the original array we don't deal with the original array untill it's updated but filter does the thing for uss
            
            const updatedArr = state.favoriteThings.filter(thing => thing.toLowerCase() !== action.payload.toLowerCase())
            return {
                ...state,
                favoriteThings: updatedArr
            }
        }
        case "SET_YOUTUBE_TITLE":
            return {
                ...state,
                youtubeVideo: {
                    ...state.youtubeVideo,
                    title: action.payload
                }
            }
        case "UPVOTE_VIDEO":
            return {
                ...state,// we keep all other piece of states
                youtubeVideo: {
                    ...state.youtubeVideo,// we keep all other property of youtubevideo
                    votes: {
                        ...state.youtubeVideo.votes,//  we keep all other property of vote.. it's a example dealing with complex object
                        up: state.youtubeVideo.votes.up + 1
                    }
                }
            }
            case 'DOWN_VOTE_VIDEO':
            return{
                ...state,
                youtubeVideo:{
                    ...state.youtubeVideo,
                    votes:{
                        ...state.youtubeVideo.votes,
                        down:state.youtubeVideo.votes.up -1
                    }
                }
            }
        default:
            return state
    }
}

const store = redux.createStore(reducer)
store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(setYouTubeTitle("Learn Redux"))
store.dispatch(upvoteVideo())
store.dispatch(upvoteVideo())
store.dispatch(downvoteVideo())