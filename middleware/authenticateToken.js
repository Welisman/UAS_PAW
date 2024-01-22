//middleware/authenticateToken.js
const jwt = require("jsonwebtoken");

function authenticateToken(req, res, next) {
  const token = req.headers["authorization"];
  if (!token) return res.status(401).send("Unauthorized");

  jwt.verify(token, 'secret', (err, user) => {
    if (err){
      return res.sendStatus(403);
    }
    req.user = user;
    next();
  });
}

module.exports = authenticateToken;
