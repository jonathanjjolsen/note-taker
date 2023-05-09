const routes = require('express').Router();
const fs = require('fs');

routes.get('/api/notes', async (req, res) => {
const notesdb = await JSON.parse(fs.readFileSync('db/db.json', 'utf8'));
res.json(notesdb);
})

module.exports = routes;