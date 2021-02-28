const mongoose = require('mongoose');

module.exports = () => {
  mongoose.connect('mongodb://db/tools');
  const db = mongoose.connection;

  /* eslint no-console: 0 */
  db.on('error', console.error.bind(console, 'Error: '));
  db.once('open', () => console.log('Connect to Mongo'));
  return db;
};
