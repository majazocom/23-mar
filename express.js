const express = require('express');
const app = express();
const port = 7000;

//Create data 
//app.post()
app.post('/add', (req, res) => {
    console.log('Alo alo :))))');
});

//Read data
//Route definition 
app.get('/', (req, res) => {
    res.send('Hello World!');
});

//Update data
//app.put()

//Delete data
//app.delete()


//Här startar vi upp servern på port 7000
app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
});