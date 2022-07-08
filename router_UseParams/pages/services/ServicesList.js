import React from "react"
import servicesData from "./servicesData"
import {Link} from "react-router-dom"


function ServicesList() {
    const services = servicesData.map(service => (
        /*here we set the link with id on the service link  to handle params the url will be /services/1 or  /services/2 ... */
        <h3 key={service._id}>
            <Link to={`/services/${service._id}`}>{service.name}</Link> - ${service.price}
        </h3>
    ))
    return (
        <div>
            <h1>Services List Page</h1>
            {services}
        </div>
    )
}

export default ServicesList