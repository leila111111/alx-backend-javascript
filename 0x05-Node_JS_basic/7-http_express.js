const express = require('express');
const countStudents = require('./3-read_file_async');

const database = process.argv[2];
const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  const response = 'This is the list of our students\n';
  countStudents(database).then((data) => {
    res.send(`${response}${data.join('\n')}`);
  }).catch((error) => {
    res.send(`${response}${error.message}`);
  });
});
app.listen(port);
module.exports = app;
