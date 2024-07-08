const express = require('express');
const router = express.Router();
const Item = require('../models/item');

// @route   GET /api/items
// @desc    Get all items
// @access  Public
router.get('/', async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

// @route   POST /api/items
// @desc    Create an item
// @access  Public
router.post('/', async (req, res) => {
  try {
    const newItem = new Item({
      name: req.body.name
    });
    const item = await newItem.save();
    res.json(item);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

//   PUT /api/items/:id
//     Update an item
//   Public
router.put('/:id', async (req, res) => {
  try {
    const item = await Item.findByIdAndUpdate(
      req.params.id,
      { $set: { name: req.body.name } },
      { new: true }
    );
    res.json(item);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

// @route   DELETE /api/items/:id
// @desc    Delete an item
// @access  Public
router.delete('/:id', async (req, res) => {
  try {
    await Item.findByIdAndRemove(req.params.id);
    res.json({ msg: 'Item removed' });
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

module.exports = router;
