import React, {useState} from "react"

function App() {
    const [inputData, setInputData] = useState({firstName: "", lastName: ""})
    const [contactsData, setContactsData] = useState([])
    
    function handleChange(event) {
        // update our inputData state
        // for this kind of entity we need to have the prev value in setState function
        const {name,value}=event.target;
        setInputData(prevInput => ({...prevInput,[name]:value}))
    }
    
    function handleSubmit(event) {
        event.preventDefault()
    
       setContactsData(prev => [...prev,inputData])
        
    }
  
    console.log(contactsData)
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input 
                    placeholder="First Name"
                    name="firstName" 
                    value={inputData.firstName}
                    onChange={handleChange}
                />
                <input 
                    placeholder="Last Name"
                    name="lastName" 
                    value={inputData.lastName}
                    onChange={handleChange}
                />
                <br />
                <button>Add contact</button>
            </form>
            {/*{contacts}*/}
        </>
    )
}

export default App