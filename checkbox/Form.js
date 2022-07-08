import React from "react"

export default function Form() {
    const [formData, setFormData] = React.useState(
        {
            firstName: "", 
            lastName: "", 
            email: "", 
            comments: "", 
            isFriendly:false
        }
    )
    
    console.log(formData.isFriendly)
    
   /*  function handleChange(event) {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }*/
    
    // to haqndle checkbox instead of above function we have to chane our function like below
      function handleChange(event) {
        const {name, value, type, checked} = event.target // just destructuring the values from event object
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }
    
    
    return (
        <form>
            <input
                type="text"
                placeholder="First Name"
                onChange={handleChange}
                name="firstName"
                value={formData.firstName}
            />
            <input
                type="text"
                placeholder="Last Name"
                onChange={handleChange}
                name="lastName"
                value={formData.lastName}
            />
            <input
                type="email"
                placeholder="Email"
                onChange={handleChange}
                name="email"
                value={formData.email}
            />
            <textarea 
                value={formData.comments}
                placeholder="Comments"
                onChange={handleChange}
                name="comments"
            />
            <input 
                type="checkbox" 
                id="isFriendly" 
                checked={formData.isFriendly}
                 onChange={handleChange}
                name="isFriendly"
            />
            <label htmlFor="isFriendly">Are you friendly?</label>
            <br />
        </form>
    )
}
