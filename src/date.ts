const express = require('express');
const app = express();

app.get('/', (req, res) => {
  var year = (new Date()).getFullYear();
  res.send(`Current year ${year}`);
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});

module.exports = app;
