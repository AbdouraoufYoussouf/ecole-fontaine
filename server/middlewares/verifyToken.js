import jwt from 'jsonwebtoken';
import 'dotenv/config';

export function verifyToken(req, res, next) {
  console.log('tokenverify:',req.headers.authorization)
  if (!req.headers.authorization) {
    return res.status(401).json({success: false, message: 'Token non authentifiée !' });
  }

  const token = req.headers.authorization.split(' ')[1]; // Bearer <token>
  jwt.verify(token, process.env.TOKEN_SECRET_KEY, (err, decodedToken) => { // Use the same key as in the login function
    if (err) {
      return res.status(401).json({success: false, message: 'Requête non authentifiée !' });
    } else {
      req.user = decodedToken;
      next();
    }
  });
}