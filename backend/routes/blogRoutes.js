const express = require('express');
const Blog = require('../models/Blog');
const auth = require('../middleware/auth');

const router = express.Router();

router.get('/', async (req, res) => {
    const blogs = await Blog.find();
    res.json(blogs);
});

router.post('/', auth, async (req, res) => {
    const blog = new Blog(req.body);
    await blog.save();
    res.status(201).json(blog);
});

router.delete('/:id', auth, async (req, res) => {
    await Blog.findByIdAndDelete(req.params.id);
    res.json({ message: 'Blog deleted' });
});

module.exports = router;
