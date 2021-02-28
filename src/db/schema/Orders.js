const { Schema, model } = require('mongoose');

const Info = new Schema({
  quantity: 'number',
  description: 'string',
  total: 'number',
  date: 'date',
});

const schema = new Schema({
  info: [Info],
  total: 'number',
  prepay: 'number',
  topay: 'number',
});
const Orders = model('orders', schema);

module.exports = Orders;
