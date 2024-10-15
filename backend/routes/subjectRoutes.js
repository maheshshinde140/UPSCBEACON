import express from 'express';
import { getAllSubjects, createSubject, updateSubject, deleteSubject, getSubjectById } from '../controllers/subjectController.js';
import { admin, protect } from '../middleware/authMiddleware.js';

const router = express.Router();

// Routes
router.get('/get', getAllSubjects);
router.get('/find/:id', getSubjectById);
router.post('/create', createSubject);
router.put('/update/:id', updateSubject);
router.delete('/delete/:id', deleteSubject);

export default router;
