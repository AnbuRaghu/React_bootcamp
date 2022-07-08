import React, {Component} from "react"

class Toggler extends Component {
    state = {
        on: this.props.defaultOnValue
    }
    
    static defaultProps = {
        defaultOnValue: false
    }
    
    toggle = () => {
        this.setState(prevState => ({on: !prevState.on}))
    }
    
    render() {
        return (
            //sometimes pople instead of calling this as render they expect the funtion that passed down by calling chidren on it
           /* <div>
            {this.props.render({
                    on: this.state.on, 
                    toggle: this.toggle
                })}
            </div>*/
            
            <div>
            {this.props.children({
                    on: this.state.on, 
                    toggle: this.toggle
                })}
            </div>
        )
    }
}

export default Toggler