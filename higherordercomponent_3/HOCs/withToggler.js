import React, {Component} from "react"
// HOC is a function that takes a component as a parameter
// and returns a new component wrapping the given component
// and "supercharging" it by giving it some extra abilities

class Toggler extends Component {
    state = {
        //on:false ,instead of false we set the option object via props
        on: this.props.defaultOnValue
    }
    
    toggle = () => {
        this.setState(prevState => {
            return {
                on: !prevState.on
            }
        })
    }
    
    render() {
        const Component = this.props.component // getting the passed component
        return (// it render the component that we passed to it   <Toggler component={component} defaultOnValue={optionsObj.defaultOnValue} {...props}/>
            <Component on={this.state.on} toggle={this.toggle} {...this.props} />
        )
    }
}
// to avoid both favorite and Menu component when renderig 1st to have a same boolewn we pased a option object to our  highrt order component and set it'own boolean value
export function withToggler(component, optionsObj) {// not only a component we can parse an option object too
    return function(props) {
        return (
            <Toggler component={component} defaultOnValue={optionsObj.defaultOnValue} {...props}/>
        )
    }
}
