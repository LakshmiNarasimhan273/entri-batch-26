const jwt = require("jsonwebtoken");

const authMiddleware = async (req, res, next) => {
    try{
        const authHeaders = req.headers.authorization;

        if(!authHeaders || !authHeaders.startsWith("Bearer ")){
            return res.status(401).json({message: "Unauthorized: Token Not Found"});
        };

        const token = authHeaders.split(" ")[1];

        // verify token
        const decoded = jwt.verify(token, process.env.jwt_secret);
        // encrypted data = token | userId, email, username
        req.user = decoded.userId;

        next();
    }catch(err){
        return res.status(401).json({message: "Invalid Token"});
    }
}

module.exports = authMiddleware;