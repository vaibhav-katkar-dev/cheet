// app.js
const express = require('express');
const cors = require('cors');
const fs = require('fs'); // ✅ to read file

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Root route
app.get('/', (req, res) => {
  res.send('✅ Public API is running! Use /vk1 to get the Java code.');
});

// ✅ Send Java code file content
app.get('/vk1', (req, res) => {
  const javaPath = __dirname + '/P1.java';
  fs.readFile(javaPath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).send('Error reading Java file.');
    }
    res.type('text/plain');
    res.send(data);
  });
});
// ✅ Send Java code file content
app.get('/vk2', (req, res) => {
  const javaPath = __dirname + '/P2.txt';
  fs.readFile(javaPath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).send('Error reading Java file.');
    }
    res.type('text/plain');
    res.send(data);
  });
});


// ✅ Send Java code file content
app.get('/vk3', (req, res) => {
  const javaPath = __dirname + '/P3.txt';
  fs.readFile(javaPath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).send('Error reading Java file.');
    }
    res.type('text/plain');
    res.send(data);
  });
});


// ✅ Send Java code file content
app.get('/vk4', (req, res) => {
  const javaPath = __dirname + '/P4.txt';
  fs.readFile(javaPath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).send('Error reading Java file.');
    }
    res.type('text/plain');
    res.send(data);
  });
});


app.listen(PORT, () => {
  console.log(`🌐 Public API live at: http://localhost:${PORT}`);
});
