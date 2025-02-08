import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
    const [team, setTeam] = useState([]);

    useEffect(() => {
        axios.get("https://your-backend-url/api/team")
            .then(response => setTeam(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div>
            <Navbar />
            <h1>About Us</h1>
            <h2>Our Team</h2>
            <ul>
                {team.map((member) => (
                    <li key={member._id}>{member.name} - {member.role}</li>
                ))}
            </ul>
            <Footer />
        </div>
    );
};

export default About;
