import Topic from '../models/Topic.js';

// Get all topics for a subject
export const getTopicsBySubject = async (req, res) => {
  try {
    const topics = await Topic.find({ subject: req.params.subjectId }).populate('subject');
    res.json(topics);
  } catch (err) {
    res.status(500).send('Server Error');
  }
};

// Create new topic
export const createTopic = async (req, res) => {
  const { subject, title, content } = req.body;
  try {
    const newTopic = new Topic({ subject, title, content });
    await newTopic.save();
    res.json(newTopic);
  } catch (err) {
    res.status(500).send('Server Error');
  }
};

// Update a topic
export const updateTopic = async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  try {
    const topic = await Topic.findByIdAndUpdate(id, { title, content }, { new: true });
    res.json(topic);
  } catch (err) {
    res.status(500).send('Server Error');
  }
};

// Delete a topic
export const deleteTopic = async (req, res) => {
    try {
      const topic = await Topic.findByIdAndDelete(req.params.id);
      if (!topic) {
        return res.status(404).json({ msg: 'Topic not found' });
      }
      res.json({ msg: 'Topic removed' });
    } catch (err) {
      console.error(err.message);
      if (err.kind === 'ObjectId') {
        return res.status(400).json({ msg: 'Invalid Topic ID' });
      }
      res.status(500).send('Server Error');
    }
  };
  

  //find by id
  export const getTopicById = async (req, res) => {
    try {
      const topic = await Topic.findById(req.params.id).populate('subject');
      if (!topic) {
        return res.status(404).json({ msg: 'Topic not found' });
      }
      res.json(topic);
    } catch (err) {
      console.error(err.message);
      if (err.kind === 'ObjectId') {
        return res.status(400).json({ msg: 'Invalid Topic ID' });
      }
      res.status(500).send('Server Error');
    }
  };
  
  
