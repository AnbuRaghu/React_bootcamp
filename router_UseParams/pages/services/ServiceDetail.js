import React from "react"
import {useParams} from "react-router-dom"
import servicesData from "./servicesData"

function ServiceDetail(props) {
    //const params = useParams()
   // console.log(params) // it give an object like this {serviceId: "2"}
    
     const {serviceId} = useParams()// we can destructure it
    // AJAX call to get the info about the specified service in real world
    // but here we use find method what find method does is it checks the specific condition and return the whole object
    const thisService=servicesData.find(obj => obj._id === serviceId)
    return (
        <>
           <h1>Service Detail Page</h1>
            <h3>{thisService.name} - ${thisService.price}</h3>
            <p>{thisService.description}</p>
            </>
    )
}

export default ServiceDetail