import React from "react"

export default function Box(props) {
    const styles = {
        backgroundColor: props.on ? "#222222" : "transparent"
    }
    
    return (
        <div 
            style={styles} 
            className="box"
            onClick={()=>props.toggle(props.id)}// if we use onClick={props.toggle(props.id)},it won't work bcz we can't call like a funtion with function arguments (). so if we want to call a function with an argument we have to make this as closure which means make onclick as function that function should call another function not a reference
        >
        </div>
    )
}