'use strict';
const stripe = require('stripe')('pk_test_51GrAFICYkZ2RIPEeOEOpDFRikCWe6XPtQsD3AOOKVKnd9rLHIX4l0fK3uwmJUyu9FoSBWtGGISc2cJ9tHnmLmQqE00DuxTFJAQ');

module.exports = {
  create: async ctx => {
    const {
      address,
      amount,
      dishes,
      postalCode,
      token,
      city,
    } = ctx.request.body;

    // Charge the customer
    try {
      await stripe.charges.create({
        // Transform cents to dollars.
        amount: amount * 100,
        currency: 'usd',
        description: `Order ${new Date()} by ${ctx.state.user.id}`,
        source: token,
      });

      // Register the order in the database
      try {
        const order = await strapi.services.order.create({
          user: ctx.state.user.id,
          address,
          amount,
          dishes,
          postalCode,
          city,
        });

        return order;
      } catch (err) {
        // Silent
      }
    } catch (err) {
      // Silent
    }
  },
};