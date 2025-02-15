// controllers/authController.js
import User from '../models/User.js'; // Add .js extension

export const signup = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    // Check if the email already exists
    const existingUser = await User.findByEmail(email);
    if (existingUser) {
      return res.status(400).json({ message: 'Email already exists' });
    }

    // Create a new user
    const newUser = { name, email, password, createdAt: new Date() };
    const user = await User.createUser(newUser);

    res.status(201).json({ message: 'User registered successfully', user });
  } catch (err) {
    console.error('Error registering user:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
};


export const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    // Check if the user exists
    const user = await User.findByEmail(email);
    if (!user) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    // Compare the provided password with the hashed password in the database
    //const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!password) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    // Return success response
    res.status(200).json({ message: 'Login successful', user });
  } catch (err) {
    console.error('Error during login:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const getTopRatedUsers = async (req, res) => {
  try {
    const users = await User.getTopRatedUsers(); // Use the correct method
    res.status(200).json(users);
  } catch (err) {
    console.error('Error fetching top-rated users:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// controllers/authController.js
export const updateProfile = async (req, res) => {
  const { userId, bio, profilePic } = req.body;

  try {
    await User.updateProfile(userId, bio, profilePic);
    res.status(200).json({ message: 'Profile updated successfully' });
  } catch (err) {
    console.error('Error updating profile:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// controllers/authController.js
export const submitRating = async (req, res) => {
  const { userId, rating } = req.body;

  try {
    await User.updateRating(userId, rating);
    res.status(200).json({ message: 'Rating submitted successfully' });
  } catch (err) {
    console.error('Error submitting rating:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// controllers/authController.js
export const getOnlineUsers = async (req, res) => {
  try {
    const onlineUsers = await User.getOnlineUsers(); // Use the correct method
    res.status(200).json(onlineUsers);
  } catch (err) {
    console.error('Error fetching online users:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// controllers/authController.js
export const updateOnlineStatus = async (req, res) => {
  const { userId, isOnline } = req.body;

  try {
    await User.setOnlineStatus(userId, isOnline);
    res.status(200).json({ message: 'Online status updated successfully' });
  } catch (err) {
    console.error('Error updating online status:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
};


// controllers/authController.js
export const getLoggedInUser = async (req, res) => {
  const { userId } = req.params;

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user);
  } catch (err) {
    console.error('Error fetching user:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// controllers/authController.js
export const logout = async (req, res) => {
  const { userId } = req.body;

  try {
    await User.setOnlineStatus(userId, false);
    res.status(200).json({ message: 'Logged out successfully' });
  } catch (err) {
    console.error('Error logging out:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
};

