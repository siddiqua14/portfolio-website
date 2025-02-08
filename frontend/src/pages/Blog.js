import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Blog = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        axios.get("https://your-backend-url/api/blogs")
            .then(response => setBlogs(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div>
            <Navbar />
            <h1>Blog</h1>
            <ul>
                {blogs.map((blog) => (
                    <li key={blog._id}>{blog.title}</li>
                ))}
            </ul>
            <Footer />
        </div>
    );
};

export default Blog;
