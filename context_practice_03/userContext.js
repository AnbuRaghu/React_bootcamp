import React from "react"

const {Provider, Consumer} = React.createContext()

class UserContextProvider extends React.Component {
    state = {
        username: "bob123"
    }
    
    changeUsername = (username) => {
        //this.setState({username:username}) as property and value is same we can use as below
        this.setState({username})
    }
    
    render() {
        const {username} = this.state
        return (
            <Provider value={{username, changeUsername: this.changeUsername}}>
                {this.props.children}
            </Provider>
        )
    }
}

export {UserContextProvider, Consumer as UserContextConsumer}