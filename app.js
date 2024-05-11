const express = require("express");
const mongoose = require('mongoose');
const app = express();
const Thing = require('./models/Thing');
const stuffRoutes = require('./routes/stuff');
mongoose.connect('mongodb+srv://Raz:1234mongo@bac.ugwmoa7.mongodb.net/?retryWrites=true&w=majority&appName=BAC',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

  app.use(express.json());
  app.use('/api/stuff', stuffRoutes);
module.exports = app ;