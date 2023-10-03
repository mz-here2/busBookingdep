import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.info_token;
  if (!token) {
    return res.status(500).json({ error: err.message });
  }

  jwt.verify(token, process.env.JWT, (err, user) => {
    if (err) return res.status(500).json({ error: err.message });
    req.user = user;
    next();
  });
};
