const adminAuth = (req, res, next) => {
    const token = "admin"; 
    const isAdminAuthorized = token === "admin";
    if (!isAdminAuthorized) {
        return res.status(401).send("You are not authorized");
    } else {
        next(); 
    }
};

module.exports = adminAuth; 
