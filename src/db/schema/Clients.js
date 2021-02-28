const { Schema, model } = require('mongoose');

const schema = new Schema({
  name: 'string',
  telephones: ['string'],
  emails: ['string'],
  direction: ['string'],
  tagID: ['string'],
},
{ timestamps: true });

const Recipies = model('recipies', schema);

module.exports = Recipies;
