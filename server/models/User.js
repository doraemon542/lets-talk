// models/User.js
import { getDB } from '../config/db.js'; // Add .js extension

class User {
  static collection() {
    return getDB().collection('users'); // Replace with your collection name
  }

  static async createUser(user) {
    try {
      const result = await User.collection().insertOne(user);
      
      // Fetch the inserted document using the insertedId
      const insertedUser = await User.collection().findOne({ _id: result.insertedId });
      
    } catch (err) {
      throw err;
    }
  }

    // Find user by ID
    static async findById(userId) {
      try {
        return await User.collection().findOne({ _id: userId });
      } catch (err) {
        throw err;
      }
    }

  static async findByEmail(email) {
    try {
      return await User.collection().findOne({ email });
    } catch (err) {
      throw err;
    }
  }

  
  // Update user profile (name, bio, profile picture)
  static async updateProfile(userId, name, bio, profilePic) {
    try {
      await User.collection().updateOne(
        { _id: userId },
        { $set: { name, bio, profilePic } }
      );
    } catch (err) {
      throw err;
    }
  }

  // Set user online status
  static async setOnlineStatus(userId, isOnline) {
    try {
      await User.collection().updateOne(
        { _id: userId },
        { $set: { isOnline } }
      );
    } catch (err) {
      throw err;
    }
  }


  
  static async getTopRatedUsers() {
    try {
      return await User.collection().find().sort({ rating: -1 }).limit(3).toArray();
    } catch (err) {
      throw err;
    }
  }

  static async getOnlineUsers() {
    try {
      return await User.collection().find({ isOnline: true }).toArray();
    } catch (err) {
      throw err;
    }
  }
}

export default User;