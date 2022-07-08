export function setUserDetails(user) {
    return {
        type: "SET_USER_DETAILS",
        payload: user
    }
}

export function removeUserDetails() {
    return {
        type: "REMOVE_USER_DETAILS"
    }
}

export default function userReducer(user = null, action) {
    switch(action.type) {
        case "SET_USER_DETAILS":
            return {
                ...user,
                ...action.payload
            }
        case "REMOVE_USER_DETAILS":
            return null 
        default:
            return user
    }
}
/* WE CAN SWET USER AS empty object as empty object returns truthy value we set it as null like above
export default function userReducer(user = {}, action) {
    switch(action.type) {
        case "SET_USER_DETAILS":
            return {
                ...user,
                ...action.payload
            }
        case "REMOVE_USER_DETAILS":
            return {} 
        default:
            return user
    }
}*/