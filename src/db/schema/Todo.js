const { Schema, model } = require('mongoose');

const schema = new Schema({
  title: 'string',
  description: 'string',
  for: ['string'],
  shouldBeIn: ['date'],
  tagId: ['string'],
});

const Tags = model('todos', schema);

module.exports = Tags;
