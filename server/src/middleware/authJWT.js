import jwt from "jsonwebtoken";

const authenticateJWT = (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) {
    return res.status(401).send("Tidak ada token, otentikasi ditolak");
  }

  try {
    const decoded = jwt.verify(token, "secretkey");
    req.user = decoded;
    next();
  } catch (error) {
    res.status(403).send("Token tidak valid");
  }
};
export default authenticateJWT;
