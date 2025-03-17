const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");

const userSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: [true, "First name is required"],
            minLength: [3, "First name must be at least 3 characters long"],
            maxLength: [50, "First name cannot exceed 50 characters"],
            trim: true,
        },
        lastName: {
            type: String,
            maxLength: [50, "Last name cannot exceed 50 characters"],
            trim: true,
        },
        email: {
            type: String,
            unique: true,
            required: [true, "Email is required"],
            lowercase: true,
            trim: true,
            validate: {
                validator: (value) => validator.isEmail(value),
                message: "Invalid email format",
            },
        },
        password: {
            type: String,
            required: [true, "Password is required"],
            // minLength: [8, "Password must be at least 8 characters long"],
            // select: false, // Exclude password from queries by default
            validate: {
                validator: (value) => validator.isStrongPassword(value),
                message: "Enter a strong password",
            },        },
        age: {
            type: Number,
            required: [true, "Age is required"],
            min: [18, "User must be at least 18 years old"],
            max: [100, "Age cannot exceed 100 years"],
        },
        gender: {
            type: String,
            required: [true, "Gender is required"],
            lowercase: true,
            enum: ["male", "female", "others"],
        },
        photoURL: {
            type: String,
            default: "/images/image.jpg",
            match: [
                /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|svg|webp))$/,
                "Invalid image URL format",
            ],
        },
        about: {
            type: String,
            default: "This is the default about section of the user",
            maxLength: [500, "About section cannot exceed 500 characters"],
            trim: true,
        },
        skills: {
            type: [String],
            validate: {
                validator: (skills) => skills.length <= 10, // Limit skills to 10
                message: "You can add up to 10 skills only",
            },
        },
    },
    {
        timestamps: true, // Automatically adds `createdAt` & `updatedAt`
    }
);

// **Hash password before saving**
userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();

    try {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next();
    } catch (error) {
        next(error);
    }
});

module.exports = mongoose.model("User", userSchema);
