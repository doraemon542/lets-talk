// routes/authRoutes.js
import express from 'express';
import { getOnlineUsers, logout, signup, updateProfile } from '../controllers/authController.js'; // Add .js extension
import { login } from '../controllers/authController.js';
import { getTopRatedUsers } from '../controllers/authController.js';
const router = express.Router();

// Signup route
router.post('/signup', signup);
router.post('/login', login);
router.get('/top-rated-users', getTopRatedUsers);
router.get('/online-users', getOnlineUsers);


router.post('/logout', logout);
router.post('/update-profile', updateProfile);


export default router;