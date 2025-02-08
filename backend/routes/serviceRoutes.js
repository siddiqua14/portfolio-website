const express = require('express');
const Service = require('../models/Service');
const auth = require('../middleware/auth');

const router = express.Router();

router.get('/', async (req, res) => {
    const services = await Service.find();
    res.json(services);
});

router.post('/', auth, async (req, res) => {
    const service = new Service(req.body);
    await service.save();
    res.status(201).json(service);
});

router.delete('/:id', auth, async (req, res) => {
    await Service.findByIdAndDelete(req.params.id);
    res.json({ message: 'Service deleted' });
});

module.exports = router;
