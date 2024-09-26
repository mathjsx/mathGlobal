// api/data.js
const express = require('express');
const app = express();

// Middleware untuk parsing JSON
app.use(express.json());

// Simpan data nama dan umur di sini
let people = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 35 }
];

// Rute untuk mendapatkan data
app.get('/api/data', (req, res) => {
  res.json(people);
});

// Rute untuk menambah data
app.post('/api/data', (req, res) => {
  const newPerson = req.body;
  if (newPerson && newPerson.name && newPerson.age) {
    people.push(newPerson);
    res.status(201).json({ message: 'Data added successfully' });
  } else {
    res.status(400).json({ message: 'Invalid data' });
  }
});

module.exports = app;
