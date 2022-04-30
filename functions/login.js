const serverless = require('serverless-http');
const express = require('express');
const app = express();

//const router = express.Router();

//router.post('/login', (req, res) => res.json({ postBody: req.body }));
//app.use(bodyParser);
//app.use('/.netlify/functions/server', router);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/** login */
app.post('/.netlify/functions/login', (req, res) => {
  console.log('received login details!');
  const email = req.body.email;
  console.log('email:', email);
  const password = req.body.password;
  console.log('password:', password);

  if (email === 'test@test.com' && password === 'test') {
    console.log(`Hi ${email} for be our member! 😀`);
    res.redirect('/members');
    return;
  }
  console.log('Sorry, you are not a member 😞');
  res.redirect('/login');
});

module.exports.handler = serverless(app);
