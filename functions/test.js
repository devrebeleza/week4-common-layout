const express = require('express');

const app = express();

const port = 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/login', (req, res) =>
  res.send('Hello from lambda netlify functions!!!')
);

app.get('/api/info', (req, res) => {
  res.send({ application: 'sample-app', version: '1.0' });
});
app.post('/api/v1/getback', (req, res) => {
  res.send({ ...req.body });
});

app.listen(port, () => console.log(`Server listening on por ${port}`));
