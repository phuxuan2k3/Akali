const express = require('express');
const { fetchBusinessManagers, fetchCandidates } = require('./db-connect');

const app = express();
const port = 3000;

app.get('/businessManagers', async (req, res) => {
    res.send(await fetchBusinessManagers())
});

app.get('/candidates', async (req, res) => {
    res.send(await fetchCandidates())
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});