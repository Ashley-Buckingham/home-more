const config = require('config');
const privateKey = config.get('privateKey');
const baseURL = config.get('baseURL');
const stripe = require('stripe')(privateKey);

async function makePayment(amount, person) {
  return await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    success_url: `${baseURL}/success?session_id={CHECKOUT_SESSION_ID}&pid=${person.id}`,
    cancel_url: `${baseURL}/?pid=${person.id}`,
    submit_type: 'donate',
    line_items: [{
      name: `Donation To ${person.name}`,
      description: `Donation will be sent to ${person.name}`,
      images: [person.image_url],
      amount: amount,
      currency: 'gbp',
      quantity: 1,
    }],
  });
}

module.exports.makePayment = makePayment;
