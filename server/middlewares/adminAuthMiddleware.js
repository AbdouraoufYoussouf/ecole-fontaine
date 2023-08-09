// Middleware d'authentification admin
import 'dotenv/config';
import jwt from 'jsonwebtoken';

const adminAuthMiddleware = (req, res, next) => {
  //console.log('token:',req.headers.authorization)
  if (!req.headers.authorization) {
    return res.status(401).json({ success: false,message: 'Token non authentifiée !' });
  }

  const token = req.headers.authorization.split(' ')[1]; // Bearer <token>
  jwt.verify(token, process.env.TOKEN_SECRET_KEY, (err, decodedToken) => { // Use the same key as in the login function
    if (err) {
      return res.status(401).json({success: false, message: 'Requête non authentifiée !' });
    } else {
      req.user = decodedToken;
      if (req.user.role==="Admin") { // Check if req.user.admin is true
        return res.status(403).json({success: false, message: 'Accès refusé Réservé à l\'admin !' });
      } else {
        next();
      }
    }
  });
};

export default adminAuthMiddleware;