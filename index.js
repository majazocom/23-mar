const express = require('express');
const app = express();
const port = 5050;

//skapa en GET-förfrågan och denna ska returnera olika kattnamn
app.get('/', (req, res) => {
    res.json(["Mooncake","DJ Spinderella","Kapten Katt","Sir Meowsalot","Misse Manson","Sivert"]);
});

app.listen(port, () => {
    console.log('server is running on port 5050');
});