const express = require('express');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) =>
res.sendFile(path.join(__dirname, '/public/assets/index.html'))
);

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));