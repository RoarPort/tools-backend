const app = require('express')();

const port = 4000;

app.get('/', (req, res) => {
  res.send('Hello');
});

/* eslint no-console: 0 */
app.listen(port, () => console.log('listening on port 4000'));
