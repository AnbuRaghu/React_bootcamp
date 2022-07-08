import React from "react"

export default function Form() {
    const [formData, setFormData] = React.useState(
        {firstName: "", lastName: ""}
        // we have to set our form elements as an objeject if we have multiple form elements to handle one onChange method
    )
    
    console.log()
    
    function handleChange(event) {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }
    
    return (
        <form>
            <input
                type="text"
                placeholder="First Name"
                onChange={handleChange}
                name="firstName" // the name property should be same as the object key property
            />
            <input
                type="text"
                placeholder="Last Name"
                onChange={handleChange}
                name="lastName"
            />
        </form>
    )
}
