const { Schema, model } = require('mongoose');

const schema = new Schema({
  title: 'string',
  ingriedents: ['string'],
  steps: ['string'],
  tagsId: ['string'],
});

const Recipies = model('recipies', schema);

module.exports = Recipies;
