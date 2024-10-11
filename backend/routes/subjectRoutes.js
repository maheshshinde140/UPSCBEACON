import express from 'express';
import { getAllSubjects, createSubject, updateSubject, deleteSubject, getSubjectById } from '../controllers/subjectController.js';
import { admin, protect } from '../middleware/authMiddleware.js';

const router = express.Router();

// Routes
router.get('/get', getAllSubjects);
router.get('/find/:id', getSubjectById);
router.post('/create',protect, createSubject);
router.put('/update/:id',protect, updateSubject);
router.delete('/delete/:id',protect,admin, deleteSubject);

export default router;
