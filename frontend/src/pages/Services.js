import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        axios.get("https://your-backend-url/api/services")
            .then(response => setServices(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div>
            <Navbar />
            <h1>Our Services</h1>
            <ul>
                {services.map((service) => (
                    <li key={service._id}>{service.name}</li>
                ))}
            </ul>
            <Footer />
        </div>
    );
};

export default Services;
