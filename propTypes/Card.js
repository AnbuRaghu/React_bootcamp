
/* React has some built-in typechecking abilities. To run typechecking on the props for a component, you can assign the special propTypes property:
we have to install a package called prop-types it usually consists of built in validator, we can check if the props is required or this props should contain only this values etc.

it's like a validator usefull only on development..it shows warning only on dev mode ater deploying this on internet it wont show any warnings

it'a a way to add validation on react

*/

import React from "react"
import PropTypes from "prop-types"

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

// Challenge: Add prop types for the height and width. Make at least one of them required.
// Extra Challenge: Make it so your incoming cardColor is only valid if it is "blue" or "red".


// important is card.proptypes here p is small and whwn parsing as value for property it should be capital eg.  cardColor: PropTypes.oneOf(['blue', 'red']),
Card.propTypes = {
    cardColor: PropTypes.oneOf(['blue', 'red']),// here we check the color propos only contains one of thos values in this case blue or red
    height:PropTypes.number.isRequired,
    width:PropTypes.number.isRequired,
    
    
   
}

Card.defaultProps = {
    height: 100,
    width: 100
}

export default Card
