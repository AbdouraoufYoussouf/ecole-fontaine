// userRoutes.js
import express from 'express';
const router = express.Router();
import * as userController from '../controllers/UserController.js';
import adminAuthMiddleware from '../middlewares/adminAuthMiddleware.js';
import { verifyToken } from '../middlewares/verifyToken.js';

// Définissez vos routes pour les utilisateurs
router.post('/login', userController.login);
router.post('/logout',verifyToken, userController.logout);
router.post('/register', userController.createUser);
router.post('/:id/changepassword', userController.updateUserPassword);
router.get('/',adminAuthMiddleware,userController.getAllUsers);
router.get('/:id', userController.getUserById);
router.post('/', userController.createUser);
router.put('/:id',adminAuthMiddleware, userController.updateUser);
router.delete('/:id',adminAuthMiddleware, userController.deleteUser);

export default router;
