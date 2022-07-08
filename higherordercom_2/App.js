import React from "react"
import {withFavoriteNumber} from "./withFavoriteNumber"

function App(props) {
    console.log(props.somePropHere)
    return (
        <div>{props.favoriteNumber}</div>
    )
}

export default withFavoriteNumber(App)