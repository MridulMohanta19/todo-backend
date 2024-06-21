require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./database');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());
const origin = 'https://todo-app-mm.vercel.app';
app.use(cors({
  credentials: true,
  origin
}));
app.get('/', (req, res) => {
    res.send('Welcome to the Todo API!');
    });
// Retrieve all tasks
app.get('/tasks', (req, res) => {
  db.all("SELECT * FROM tasks", [], (err, rows) => {
    if (err) {
      res.status(400).json({ "error": err.message });
      return;
    }
    res.json(rows);
  });
});

// Create a new task
app.post('/tasks', (req, res) => {
  const { title, description, completedOn } = req.body;
  const sql = 'INSERT INTO tasks (title, description, completedOn) VALUES (?, ?, ?)';
  const params = [title, description, completedOn || null];
  db.run(sql, params, function (err) {
    if (err) {
      res.status(400).json({ "error": err.message });
      return;
    }
    res.status(201).json({ id: this.lastID, title, description, completedOn });
  });
});

// Retrieve a single task by its ID
app.get('/tasks/:id', (req, res) => {
  const sql = 'SELECT * FROM tasks WHERE id = ?';
  const params = [req.params.id];
  db.get(sql, params, (err, row) => {
    if (err) {
      res.status(400).json({ "error": err.message });
      return;
    }
    res.json(row);
  });
});

// Update an existing task
app.put('/tasks/:id', (req, res) => {
  const { title, description, completedOn } = req.body;
  const sql = 'UPDATE tasks SET title = ?, description = ?, completedOn = ? WHERE id = ?';
  const params = [title, description, completedOn, req.params.id];
  db.run(sql, params, function (err) {
    if (err) {
      res.status(400).json({ "error": err.message });
      return;
    }
    res.json({ updatedID: this.changes, title, description, completedOn });
  });
});

// Delete a task
app.delete('/tasks/:id', (req, res) => {
  const sql = 'DELETE FROM tasks WHERE id = ?';
  const params = [req.params.id];
  db.run(sql, params, function (err) {
    if (err) {
      res.status(400).json({ "error": err.message });
      return;
    }
    res.status(204).send();
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:3001`);
});


