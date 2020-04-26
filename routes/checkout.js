const config = require('config');
const express = require('express');
const router = express.Router();

const db = require('../libs/db');
const stripe = require('../libs/stripe');

const publicKey = config.get('publicKey');
const stripeMinimumAmount = 30;

router.get('/checkout', async (req, res) => {
  const amount = req.query.amount;
  const personID = req.query.pID;

  if (!amount || amount < stripeMinimumAmount || !personID) {
    if (personID) return res.redirect(`/?pID=${personID}`);
    return res.redirect(`/404`);
  }

  const person = db.getPerson(personID);
  const paymentIntent = await stripe.makePayment(amount, person);
  res.render('checkout', {CHECKOUT_SESSION_ID: paymentIntent.id, publicKey: publicKey});
});

module.exports = router;
