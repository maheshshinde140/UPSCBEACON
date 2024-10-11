import express from 'express';
import { getTopicsBySubject, createTopic, updateTopic, deleteTopic, getTopicById } from '../controllers/topicController.js';
import { admin, protect } from '../middleware/authMiddleware.js';

const router = express.Router();

// Routes
router.get('/:subjectId', getTopicsBySubject);
router.get('/find/:id', getTopicById); 
router.post('/create', protect, admin, createTopic);
router.put('/update/:id',protect, admin, updateTopic);
router.delete('/delete/:id',protect, admin, deleteTopic);

export default router;
