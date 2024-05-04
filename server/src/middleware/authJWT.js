import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../../config/env";

const authenticateJWT = (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) {
    return res.status(401).send("Tidak ada token, otentikasi ditolak");
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(403).send("Token tidak valid");
  }
};
export default authenticateJWT;
