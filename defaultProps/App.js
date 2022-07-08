import React from "react"
import Card from "./Card"

function App() {
    return (
        <div>
            <Card cardColor="red" height={200} width={300} />
            <Card />
            <Card cardColor="green" />
        </div>
    )
}

export default App