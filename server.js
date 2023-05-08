const express = require('express');
const htmlRoutes = require('./Routes/html.js')

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(express.static('public'));
app.use(htmlRoutes);



app.listen(PORT, () => console.log(`App listening on port ${PORT}`));