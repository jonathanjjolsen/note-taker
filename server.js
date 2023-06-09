//Necessary imports for functionality
const express = require('express');
const htmlRoutes = require('./Routes/html.js')
const apiRoutes = require('./Routes/api.js')

//Sets port for application
const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(express.static('public'));
app.use(htmlRoutes);
app.use(apiRoutes);

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));