import User from '../models/User.js';
import jwt from 'jsonwebtoken';

// Register a new user
export const registerUser = async (req, res) => {
  const { username, password, role } = req.body;

  try {
    const user = new User({ username, password, role });
    await user.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// Login user
export const loginUser = async (req, res) => {
    const { username, password } = req.body;
  
    try {
      const user = await User.findOne({ username });
  
      if (!user || !(await user.matchPassword(password))) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }
  
      const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
  
      // Set JWT in cookies
      res.cookie('token', token, { httpOnly: true, secure: process.env.NODE_ENV === 'production' });
      
      // Include the token in the response
      res.json({ message: 'Logged in successfully', role: user.role, token }); // Ensure token is included here
    } catch (err) {
      res.status(500).json({ message: 'Server Error' });
    }
  };
  

// Get all users (only accessible by admin)
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// Get a user by ID
export const getUserById = async (req, res) => {
    const { id } = req.params;
  
    try {
      const user = await User.findById(id);
  
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      res.json(user);
    } catch (err) {
      res.status(500).json({ message: 'Server Error' });
    }
  };

// Logout user
export const logoutUser = (req, res) => {
  res.clearCookie('token');
  res.json({ message: 'Logged out successfully' });
};

// Delete user (only accessible by admin)
export const deleteUser = async (req, res) => {
    const { id } = req.params;
  
    try {
      // Check if the user exists
      const user = await User.findById(id);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      // Delete the user using findByIdAndDelete
      await User.findByIdAndDelete(id);
      res.json({ message: 'User removed successfully' });
    } catch (err) {
      console.error(err); // Log the error for debugging
      res.status(500).json({ message: 'Server Error' });
    }
  };
  
  