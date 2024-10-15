import Subject from '../models/Subject.js';

// Get all subjects
export const getAllSubjects = async (req, res) => {
  try {
    const subjects = await Subject.find();
    res.json(subjects);
  } catch (err) {
    res.status(500).send('Server Error');
  }
};

// Create new subject
export const createSubject = async (req, res) => {
  
  const { name, description } = req.body;
  try {
    const newSubject = new Subject({ name, description });
    await newSubject.save();
    res.json(newSubject);
  } catch (err) {
    res.status(500).send('Server Error');
  }
};

// Update a subject
export const updateSubject = async (req, res) => {
  const { id } = req.params;
  const { name, description } = req.body;
  try {
    const subject = await Subject.findByIdAndUpdate(id, { name, description }, { new: true });
    res.json(subject);
  } catch (err) {
    res.status(500).send('Server Error');
  }
};

// Delete a subject
export const deleteSubject = async (req, res) => {
    try {
      const subject = await Subject.findByIdAndDelete(req.params.id);
      if (!subject) {
        return res.status(404).json({ msg: 'Subject not found' });
      }
      res.json({ msg: 'Subject removed' });
    } catch (err) {
      console.error(err.message);
      if (err.kind === 'ObjectId') {
        return res.status(400).json({ msg: 'Invalid Subject ID' });
      }
      res.status(500).send('Server Error');
    }
  };
  
  

//FInd by id 
export const getSubjectById = async (req, res) => {
    try {
      const subject = await Subject.findById(req.params.id);
      if (!subject) {
        return res.status(404).json({ msg: 'Subject not found' });
      }
      res.json(subject);
    } catch (err) {
      console.error(err.message);
      if (err.kind === 'ObjectId') {
        return res.status(400).json({ msg: 'Invalid Subject ID' });
      }
      res.status(500).send('Server Error');
    }
  };
  
