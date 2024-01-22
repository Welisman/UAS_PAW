//controllers/HomeController.js
const PostModel = require('../models/PostModel');
const UserModel = require('../models/usermodels');

async function getHomeFeed(req, res) {
  try {
    // Get all posts from the database
    const posts = await PostModel.getAllPosts();

    // Get additional data if needed (e.g., user details for each post)
    // For example, get usernames of users who posted the posts
    const postsWithUsernames = await Promise.all(
      posts.map(async (post) => {
        const user = await UserModel.usersDetailByID(post.user_id);
        return {
          id: post.id,
          content: post.content,
          user: {
            id: user.id,
            username: user.username,
            // Add more user details as needed
          },
          // Add more post details as needed
        };
      })
    );

    res.status(200).json(postsWithUsernames);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

// Other controller functions for home/feed as needed

module.exports = {
  getHomeFeed,
  // Export other functions if needed
};