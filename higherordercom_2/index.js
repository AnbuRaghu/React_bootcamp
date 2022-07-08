import React from "react"
import ReactDOM from "react-dom"
import App from "./App"

ReactDOM.render(<App somePropHere="Hi there!" />, document.getElementById("root"))
// here in APP COMPONENT Is not the App component we wrote it's just a componnet that get reurns from the higher order component called export default withFavoriteNumber(App)..also we dont export the actual App component we just export the higher order component. but if we wanna pass our custom props to App component like above <App somePropHere="Hi there!" /> we have to destructure the props in our higher order component   <C favoriteNumber={42} {...props}/> like this without destructuring {...props } we can#t get the the props we passed our app component