const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.use(express.json());


app.get('/', (req, res) => {
  res.send(`Hello World`);
});

app.post('/register', (req, res) => {
  console.log(req.body, 'req.body');
  const { username } = req.body;
  res.json({ message: 'ok', username });
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

