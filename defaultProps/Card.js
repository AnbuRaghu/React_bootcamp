import React from "react"

function Card(props) {
    const styles = {
        backgroundColor: props.cardColor,
        height: props.height,
        width: props.width
    }
    
    return (
        <div style={styles}></div>
    )
}

// the idea of defaultProps is to provide a fallback for any props that might be misssing
// we can define a default props as follows after i finish my functional component 1.function name and then a dot defaultProps and the name of the props we pass where we call
Card.defaultProps = {
    cardColor: "blue",
    height:100,
    width:100
}

export default Card


// how we use default props in class componentimport React from "react"
/*import React from "react"
class Card extends React.Component {
    // we have to set the default inside class and as static variable
    static defaultProps = {
        cardColor: "blue",
        height: 100,
        width: 100
    }
    
    render() {
        const styles = {
            backgroundColor: this.props.cardColor,
            height: this.props.height,
            width: this.props.width
        }
        
        return (
            <div style={styles}></div>
        )
    }
}

export default Card*/