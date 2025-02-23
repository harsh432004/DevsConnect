const express = require('express');
require('dotenv').config();

const app = express();

app.get("/", (req, res) => {
    res.send('Hello from Main Page!');
});

app.get("/home", (req, res) => {
    res.send('Hello from Home Page!');
});

app.get("/api", (req, res) => {
    res.send('Hello from API Page!');
});

app.get("/about-us", (req, res) => {
    res.send('Hello from About-Us Page!');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
