const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        const token = authHeader && authHeader.split(' ')[1];
        if(!token) return res.sendStatus(401)

        const decodeData = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        console.log(decodeData);
        req.userId = decodeData?._id;
        next();
    } catch (error) {
        res.status(500).json({ success: false, message: "something went wrong" });
        console.log(error)
    }
}

module.exports = auth;