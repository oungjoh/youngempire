document.body.style.backgroundColor = "#ff3366";
const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');

yesButton.addEventListener('click', () => {
  const email = 'johnagbonlahor@gmail.com';
  const url = `https://example.com/feedback?email=${encodeURIComponent(email)}&answer=yes`;
  window.open(url, '_blank');
});

noButton.addEventListener('click', () => {
  const email = 'johnagbonlahor@gmail.com';
  const url = `https://example.com/feedback?email=${encodeURIComponent(email)}&answer=no`;
  window.open(url, '_blank');
});



const express = require('express');
const app = express();

app.get('/feedback', (req, res) => {
  const email = req.query.email;
  const answer = req.query.answer;

  // Record the feedback in a database or send an email
  res.send('Feedback received');
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});