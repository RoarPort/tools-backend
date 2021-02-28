const { Schema, model } = require('mongoose');

const schema = new Schema({
  name: 'string',
  publishBy: 'string',
  description: 'string',
  color: 'string',
});

const Tags = model('tags', schema);

module.exports = Tags;
