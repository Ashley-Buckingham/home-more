const express = require('express');
const router = express.Router();
const config = require('config');
const baseURL = config.get('baseURL');

const db = require('../libs/db');

router.get('/', async (req, res) => {
  res.render('index', {baseURL: baseURL});
});

router.get('/person', async (req, res) => {
  const personID = req.query.pID;
  const person = db.getPerson(personID);
  res.render('person', {person: person});
});

module.exports = router;
