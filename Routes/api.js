// Imports necessary for functionality
const routes = require('express').Router();
const fs = require('fs');
const uuid = require('../public/Assets/js/uuid');

//Get request for displaying previously added notes from internal database
routes.get('/api/notes', async (req, res) => {
const notesdb = await JSON.parse(fs.readFileSync('db/db.json', 'utf8'));
res.json(notesdb);
})

//Post request for adding notes to the internal database
routes.post('/api/notes', (req, res) => {
    //Reads notes database and sets it equal to variable
    const notesdb = JSON.parse(fs.readFileSync('db/db.json', 'utf8'));
    const newNote = {
        title: req.body.title,
        text: req.body.text,
        //Calls method to create unique id number
        id: uuid(),
    };
    //Section below adds new note to database and then sends response to user front end
    notesdb.push(newNote);
    fs.writeFileSync('db/db.json', JSON.stringify(notesdb));
    res.json(notesdb);
})

// Exports routes to be used by server
module.exports = routes;