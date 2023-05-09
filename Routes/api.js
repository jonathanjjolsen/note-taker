const routes = require('express').Router();
const fs = require('fs');

routes.get('/api/notes', async (req, res) => {
const notesdb = await JSON.parse(fs.readFileSync('db/db.json', 'utf8'));
res.json(notesdb);
})

routes.post('/api/notes', (req, res) => {
    const notesdb = JSON.parse(fs.readFileSync('db/db.json', 'utf8'));
    const newNote = {
        title: req.body.title,
        text: req.body.text,
        id: uuid(),
    };
    notesdb.push(newNote);
    fs.writeFileSync('db/db.json', JSON.stringify(notesdb));
    res.json(notesdb);
})

module.exports = routes;