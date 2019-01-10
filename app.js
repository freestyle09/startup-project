const express = require('express');
const app = express();

app.get('/api/cat', (req, res) => {
  res.send('Hello cats!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Listening on ${PORT} ...`));
