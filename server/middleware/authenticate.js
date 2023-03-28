const jwt = require("jsonwebtoken");

const authenticate = (req, res, next) => {
  try {
    const token = req.header.authorization.split(" ")[1];
    const decode = jwt.verify(token, "secretValue");

    req.user = decode;
    next();
  } catch (error) {
    res.json({
      message: "Authentication failed",
    });
  }
};

module.exports = authenticate;
