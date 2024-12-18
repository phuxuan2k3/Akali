const express = require('express');
const { init, fetchBusinessManagers, fetchCandidates, fetchBusinessManagersbyIDs } = require('./db-connect');
require('dotenv').config();
const app = express();
app.use(express.json());


init();
//Init function is called to create the tables in the database

app.get('/businessManagers', async (req, res) => {
    res.send(await fetchBusinessManagers())
});

app.get('/candidates', async (req, res) => {
    res.send(await fetchCandidates())
});

app.post('/account/company/many', async (req, res) => {
    const ids = req.body.ids;
    // Example body for POST request to /account/company/many
// {
//     "ids": ["id1", "id2", "id3"]
// }
    res.send(await fetchBusinessManagersbyIDs(ids))
});


app.listen(process.env.Port, () => {
    console.log(`Server is running on http://localhost:${process.env.Port}`);
});
