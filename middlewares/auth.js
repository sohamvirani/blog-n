const jwt = require("jsonwebtoken");
const secret = "aasdasfsdgsdfafsfasfs";
const createToken = (data) => {
  const token = jwt.sign({ data }, secret);
  return token;
};

const verifyToken = (token) => {
  return jwt.verify(token, secret);
};

module.exports = { createToken, verifyToken };

