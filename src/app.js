const express = require("express");
const connectDB = require("./config/database");
require("dotenv").config();
const bcrypt = require("bcrypt");
const app = express();
const User = require("./models/user");
const {validateSignUpData} = require("./utils/validator");

app.use(express.json());
app.use(express.static("public"));

// Helper function to prevent password exposure
const filterUser = (user) => {
    const { password, ...filteredUser } = user.toObject();
    return filteredUser;
};

// Signup Route
app.post("/signup", async (req, res) => {
    try {
        validateSignUpData(req);

        // Create new user instance
        const user = new User(req.body);
        const existingUser = await User.findOne({ email: req.body.email });
if (existingUser) {
    return res.status(400).json({ error: "Email already in use" });
}

        await user.save();

        return res.status(201).json({ message: "User added successfully", user: filterUser(user) });

    } catch (err) {
        return res.status(500).json({ error: "Error adding user: " + err.message });
    }
});

// Get User by Email
app.get("/user", async (req, res) => {
    const userEmail = req.query.email; // Fixed field name
    if (!userEmail) {
        return res.status(400).json({ error: "Email is required" });
    }

    try {
        const user = await User.findOne({ email: userEmail }).exec();
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        return res.json(filterUser(user));
    } catch (err) {
        return res.status(500).json({ error: "Error fetching user: " + err.message });
    }
});

// Get User by ID
app.get("/user/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id).exec();
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        return res.json(filterUser(user));
    } catch (err) {
        return res.status(500).json({ error: "Error fetching user: " + err.message });
    }
});

// Delete User by ID
app.delete("/user", async (req, res) => {
    const { userId } = req.body;
    if (!userId) {
        return res.status(400).json({ error: "User ID is required" });
    }

    try {
        const user = await User.findByIdAndDelete(userId).exec();
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        return res.json({ message: "User deleted successfully", deletedUser: filterUser(user) });
    } catch (err) {
        return res.status(500).json({ error: "Error deleting user: " + err.message });
    }
});

// Update User by ID
app.patch("/user", async (req, res) => {
    const { userId, password, ...updateData } = req.body;

    if (!userId) {
        return res.status(400).json({ error: "User ID is required" });
    }

    const allowedUpdates = ["photoURL", "about", "gender", "age", "skills", "password"];
    const isUpdateValid = Object.keys(updateData).every((key) => allowedUpdates.includes(key));

    if (!isUpdateValid) {
        return res.status(400).json({ error: "Invalid update fields" });
    }

    if (password) {
        try {
            const salt = await bcrypt.genSalt(10);
            updateData.password = await bcrypt.hash(password, salt);
        } catch (error) {
            return res.status(500).json({ error: "Error hashing password" });
        }
    }

    try {
        // Optional: Validate manually before update
        const temp = new User(updateData);
        await temp.validate();

        const updatedUser = await User.findByIdAndUpdate(userId, updateData, {
            new: true,
            runValidators: true,
        }).exec();

        if (!updatedUser) {
            return res.status(404).json({ error: "User not found" });
        }

        return res.json({ message: "User updated successfully", updatedUser: filterUser(updatedUser) });
    } catch (err) {
        return res.status(500).json({ error: "Error updating user: " + err.message });
    }
});



// Feed API - Get all users (Excludes Passwords)
app.get("/feed", async (req, res) => {
    try {
        const users = await User.find({});
        return res.json(users.map(filterUser));
    } catch (err) {
        return res.status(500).json({ error: "Error fetching users: " + err.message });
    }
});

// Database Connection & Start Server
async function startServer() {
    try {
        await connectDB();
        console.log("Connected to DB");

        const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

    } catch (err) {
        console.error("Error connecting to DB:", err.message);
        process.exit(1);
    }
}

startServer();
