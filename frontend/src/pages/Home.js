import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/home.css";

const Home = () => {
    return (
        <>
            <Navbar />
            <section className="hero">
                <div className="hero-text">
                    <h1>Welcome to My Portfolio</h1>
                    <p>Discover my projects and services.</p>
                    <button className="button">View Projects</button>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Home;
