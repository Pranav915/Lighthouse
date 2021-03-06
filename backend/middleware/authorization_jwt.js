const jwt = require("jsonwebtoken");

function genToken(data) {
  return jwt.sign(data, "abcd", { expiresIn: "4h" });
}

function authToken(req, res, next) {
  const token = req.headers["authorization"]
    ? req.headers["authorization"]
    : null;
  if (token === null) return res.status(401).end();

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, auth) => {
    if (err) return res.status(403).end();
    if (auth.email === process.env.ADMIN) {
      req["admin"] = true;
    } else {
      req["admin"] = true;
    }
    next();
  });
}

module.exports = {
  genToken,
  authToken,
};
