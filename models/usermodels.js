//models/UserModel.js
const connection = require("../databaseConnection");

async function getAllUsers() {
  const [result] = await connection.execute("SELECT * FROM users");
  return result;
}

async function usersDetailByID(id) {
  try {
    const [result] = await connection.execute(
      "SELECT * FROM users WHERE id = ?",
      [id]
    );
    return result;
  } catch (error) {
    throw error;
  }
}

async function getProfileByUsername(username) {
  try {
    const [user] = await connection.execute(
      "SELECT * FROM users WHERE username = ?",
      [username]
    );
    return user;
  } catch (error) {
    throw error;
  }
}

async function createUser(userData) {
  const { username, email, password, nama_lengkap, bio, gambar_profil, role } = userData;
  const [result] = await connection.execute('INSERT INTO users (username, email, password, nama_lengkap, bio, gambar_profil, role) VALUES (?, ?, ?, ?, ?, ?, ?)', [username, email, password, nama_lengkap, bio, gambar_profil, role]);
  return result;
}

async function editprofile(userData,id) {
  const { username, email, password, nama_lengkap, bio, gambar_profil, role } = userData;
  const [result] = await connection.execute('UPDATE users SET username = ?, email = ?, password= ?, nama_lengkap= ?, bio= ?, gambar_profil=?, role=? WHERE id = ?', [username, email, password, nama_lengkap, bio, gambar_profil, role,id]);
  return result;
}
// Other CRUD operations

module.exports = {
  getAllUsers,
  usersDetailByID,
  getProfileByUsername,
  createUser,
  editprofile
  // Other exported functions
};