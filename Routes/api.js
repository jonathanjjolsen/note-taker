const routes = require('express').Router();
const fs = require('fs');

routes.get('/api/notes', (req, res) => {
const notesdb = JSON.parse(fs.readFile('db/db.json', 'utf8'));
res.json(notesdb);
})

module.exports = routes;