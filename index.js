const express = require('express');
const DBClient = require('mongodb').MongoClient;
const app = express();
const port = 5050;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const connectionString = 'mongodb+srv://admin:admin@cluster0.vyl5z.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

DBClient.connect(connectionString, { useUnifiedTopology: true })
    .then(client => {
        const db = client.db('catnamesdb');
        const collection = db.collection('catnames');
        console.log('Hej från databasen');

        //skapa en GET-förfrågan och denna ska returnera olika kattnamn
        app.get('/', (req, res) => {
            res.sendFile(__dirname + '/public/index.html')
            //res.json([{"name": "Mooncake"},{"name": "DJ Spinderella"},{"name": "Kapten Katt"},{"name": "Sir Meowsalot"},{"name": "Misse Manson"},{"name": "Sivert"}]);
        });

        app.post('/add', (req, res) => {
            collection.insertOne(req.body)
            .then(res.redirect('/'))
            .catch(error => console.log(error));
        });

        app.listen(port, () => {
            console.log('server is running on port 5050', __dirname);
        });
    })
    .catch(error => console.log('Det blev lite fel här: ' + error))