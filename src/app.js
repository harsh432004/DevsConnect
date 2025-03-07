const express = require('express');
const connectDB =  require("./config/database")
require('dotenv').config();
const app = express();
const User = require("./models/user");


app.use(express.json());

app.post('/signup', async(req, res) =>{
    // console.log(req.body);
    const user = new User(req.body);
    try {
    await user.save();
    res.send("User added successfully");
    } catch (err) {
        res.status(400).send("Error adding user:" + err.message);
        }

});


connectDB().then(()=>{
    console.log('connected to db');
    app.listen(3000, () => {
        console.log(`Server is running on port 3000`);
    });      
}).catch(err =>{
    console.error('error connecting to db')
})

