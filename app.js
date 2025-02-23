const express = require('express');
require('dotenv').config();

const app = express();



app.get("/home", (req, res) => {
    res.send('Hello from Home Page!');
});

app.post("/home", (req, res) => {
    res.send('Adding your data to db!');
    console.log('Data added to db');
});

app.delete("/home", (req, res) => {
    res.send('Deleting your data from db!');
    console.log('Data deleted from db');
});

app.post("/api/login", (req, res) => {
    console.log("Added login");
    res.send('Hello from Login Page!');
});

app.get("/api", (req, res) => {
    res.send('Hello from API Page!');
});



app.get("/about-us", (req, res) => {
    res.send('Hello from About-Us Page!');
});

app.get("/", (req, res) => {
    res.send('Hello from Main Page!');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
