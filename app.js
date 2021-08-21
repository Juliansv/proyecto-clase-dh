const express = require('express');
const path = require('path');

const app = express();

const publicPath = path.resolve(__dirname, './public');
app.use( express.static(publicPath) );

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "views/home.html"));
});

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, "views/register.html"));
});

app.listen(process.env.PORT || 3000, () => {
    console.log('Servidor corriendo en puerto 3000')
});