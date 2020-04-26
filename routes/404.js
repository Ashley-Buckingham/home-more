const express = require('express');
const router = express.Router();

router.get('/404', async (req, res) => {
  res.send('Page not found');
});

module.exports = router;
