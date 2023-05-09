//Imports for functionality
const routes = require('express').Router();
const path = require('path');

//Route for homepage
routes.get('/', (req, res) => {
res.sendFile(path.join(__dirname, '..public/index.html'))
});

//Route for notes html page
routes.get('/notes', (req, res) =>{
    res.sendFile(path.join(__dirname, '../public/notes.html'))
});

//Exports routes to be used by server
module.exports = routes;