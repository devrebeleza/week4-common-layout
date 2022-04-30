const serverless = require('serverless-http');
const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/** Sign Up */
app.post('/.netlify/functions/signup', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const password_confirmation = req.body.password_confirmation;
  if (!email || !password || !password_confirmation) {
    res.status(400).send('Missing data, all field are necessary');
    return;
  }

  if (accountExists(email)) {
    res.status(403).send('Account already exists');
    return;
  }

  if (password !== password_confirmation) {
    res.status(400).send('Password do not match');
    return;
  }

  if (password.length < 8) {
    res.status(400).send('Password is invalid, to short');
    return;
  }

  createAccount(email, password);
  res.status(200).send('Account created succesfully!!');
});

const accountExists = (email) => {
  return false;
};

const createAccount = (email, password) => {
  return true;
};

module.exports.handler = serverless(app);
