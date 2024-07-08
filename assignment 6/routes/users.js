const express = require('express');
const router = express.Router();
const User = require('../models/user');

// @route   GET /api/users
// @desc    Get all users
// @access  Public
router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

// @route   POST /api/users
// @desc    Create a user
// @access  Public
router.post('/', async (req, res) => {
  try {
    const newUser = new User({
      name: req.body.name,
      email: req.body.email
    });
    const user = await newUser.save();
    res.json(user);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

// @route   PUT /api/users/:id
// @desc    Update a user
// @access  Public
router.put('/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.params.id,
      { $set: { name: req.body.name, email: req.body.email } },
      { new: true }
    );
    res.json(user);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

// @route   DELETE /api/users/:id
// @desc    Delete a user
// @access  Public
router.delete('/:id', async (req, res) => {
  try {
    await User.findByIdAndRemove(req.params.id);
    res.json({ msg: 'User removed' });
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

module.exports = router;
