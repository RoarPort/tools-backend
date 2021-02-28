const mongoose = require('mongoose');

function connectToDB() {
  const url = 'mongodb://db/tools';

  mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const db = mongoose.connection;
  /* eslint no-console: 0 */
  db.on('error', console.error.bind(console, 'connection error'));
  db.once('open', () => console.log('DB connected'));
}

connectToDB();
