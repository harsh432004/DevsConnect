const validator = require("validator");

const validateSignUpData = (req) => {
    const { firstName, lastName, email, password } = req.body;

    if (!firstName?.trim() || !lastName?.trim()) {
        throw new Error("Name is not valid!");
    }

    if (!validator.isEmail(email)) {
        throw new Error("Email is not valid!");
    }

    if (!validator.isStrongPassword(password)) {
        throw new Error("Please enter a strong password!");
    }

    return true;  
};
module.exports = {validateSignUpData};
