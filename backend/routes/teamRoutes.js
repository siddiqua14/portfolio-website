const express = require('express');
const Team = require('../models/Team');
const auth = require('../middleware/auth');

const router = express.Router();

router.get('/', async (req, res) => {
    const team = await Team.find();
    res.json(team);
});

router.post('/', auth, async (req, res) => {
    const teamMember = new Team(req.body);
    await teamMember.save();
    res.status(201).json(teamMember);
});

router.delete('/:id', auth, async (req, res) => {
    await Team.findByIdAndDelete(req.params.id);
    res.json({ message: 'Team member deleted' });
});

module.exports = router;
