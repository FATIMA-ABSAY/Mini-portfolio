const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('public'));
app.use(express.json());

app.post('/contact', (req, res) => {
  console.log("Message reçu :", req.body);
  res.send("Merci pour votre message !");
});

app.listen(PORT, () => {
  console.log(`Serveur en écoute sur http://localhost:${PORT}`);
});
