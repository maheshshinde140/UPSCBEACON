import express from 'express';
import { registerUser, loginUser, getAllUsers, deleteUser, logoutUser, getUserById } from '../controllers/userController.js';
import { admin, protect } from '../middleware/authMiddleware.js';

const router = express.Router();

// Routes
router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/get',protect, admin, getAllUsers); // Only admin can get all users
router.post('/logout', logoutUser);
// Route to fetch user by ID
router.get('/:id', getUserById);
router.delete('/delete/:id', protect, admin, deleteUser);

export default router;
