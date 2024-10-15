import express from 'express';
import { getTopicsBySubject, createTopic, updateTopic, deleteTopic, getTopicById } from '../controllers/topicController.js';
import { admin, protect } from '../middleware/authMiddleware.js';

const router = express.Router();

// Routes
router.get('/:subjectId', getTopicsBySubject);
router.get('/find/:id', getTopicById); 
router.post('/create',  createTopic);
router.put('/update/:id', updateTopic);
router.delete('/delete/:id', deleteTopic);

export default router;
