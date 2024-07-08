const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const items = require('./routes/items');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(`${process.env.MONGO_URI}`)
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err));

app.use('/api/items', items);

app.listen(port, () => console.log(`Server running on port ${port}`));
