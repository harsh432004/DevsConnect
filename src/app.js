const express = require('express');
const connectDB = require("./config/database");
require('dotenv').config();
const app = express();
const User = require("./models/user");

app.use(express.json());

// Signup Route
app.post('/signup', async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.send("User added successfully");
    } catch (err) {
        if (err.code === 11000) {
            return res.status(400).send("Email already exists");
        }
        res.status(400).json({ error: "Error adding user: " + err.message });
    }
});

// Get User by Email
app.get('/user', async (req, res) => {
    const userEmail = req.query.emailId;
    if (!userEmail) {
        return res.status(400).json({ error: "Email is required" });
    }

    try {
        const user = await User.findOne({ emailId: userEmail }).exec();
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        res.json(user);
    } catch (err) {
        res.status(500).json({ error: "Error fetching user: " + err.message });
    }
});

// Get User by ID
app.get('/user/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id).exec();
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        res.json(user);
    } catch (err) {
        res.status(500).json({ error: "Error fetching user: " + err.message });
    }
});

// Delete User by ID
app.delete('/user', async (req, res) => {
    const userId = req.body.userId;
    try {
        const user = await User.findByIdAndDelete(userId).exec();
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        res.json({ message: "User deleted successfully", deletedUser: user });
    } catch (err) {
        res.status(500).json({ error: "Error deleting user: " + err.message });
    }
});

// Update User by ID
app.patch('/user', async (req, res) => {
    const userId = req.body.userId;
    const data = req.body;
    try {
        const updatedUser = await User.findByIdAndUpdate(userId, data, { new: true });
        if (!updatedUser) {
            return res.status(404).json({ error: "User not found" });
        }
        res.json({ message: "User updated successfully", updatedUser });
    } catch (err) {
        res.status(500).json({ error: "Error updating user: " + err.message });
    }
});

// Feed API - Get all users
app.get('/feed', async (req, res) => {
    try {
        const users = await User.find({});
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: "Error fetching users: " + err.message });
    }
});

// Database Connection
async function startServer() {
    try {
        await connectDB();
        console.log('Connected to DB');

        app.listen(3000, () => {
            console.log(`Server is running on port 3000`);
        });

    } catch (err) {
        console.error('Error connecting to DB:', err.message);
        process.exit(1);
    }
}

startServer();
