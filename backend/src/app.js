const express = require('express');
const cors = require('cors'); // Importez le module cors

const app = express();


app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
  res.send(`Hello World`);
});


// app.js
app.post('/register', (req, res) => {
  console.log(req.body, 'req.body');
  // Extract the username from req.body
  const { username } = req.body;
  // Send the username in the response
  res.json({ message: 'ok', username });
});


const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
