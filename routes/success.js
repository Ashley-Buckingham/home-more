const express = require('express');
const router = express.Router();

const db = require('../libs/db');

router.get('/success', async (req, res) => {
  const personID = req.query.pID;
  const person = db.getPerson(personID);
  res.render('success', {person: person});
});

module.exports = router;
