import React from "react";
import { Link } from "react-router-dom";
import "../styles/global.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            <h2>My Portfolio</h2>
            <div>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/blog">Blog</Link>
                <Link to="/services">Services</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </nav>
    );
};

export default Navbar;
