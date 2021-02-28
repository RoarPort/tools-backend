const { Schema, model } = require('mongoose');

const schema = new Schema({
  name: 'string',
  email: 'string',
  pwd: 'string',
  level: 'string',
});

const User = model('users', schema);

module.exports = User;
