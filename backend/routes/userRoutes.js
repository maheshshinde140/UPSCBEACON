import express from 'express';
import { registerUser, loginUser, getAllUsers, deleteUser, logoutUser } from '../controllers/userController.js';
import { admin, protect } from '../middleware/authMiddleware.js';

const router = express.Router();

// Routes
router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/get',protect, admin, getAllUsers); // Only admin can get all users
router.post('/logout', logoutUser);
router.delete('/delete/:id', protect, admin, deleteUser);

export default router;
