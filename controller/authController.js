//controllers/AuthController.js
const UserModel = require("../models/usermodels");
const jwt = require("jsonwebtoken");

async function login(req, res) {
  try {
    const { username, password } = req.body;

    const user = await UserModel.getProfileByUsername(username);

    if (!user || user.length === 0) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    const token = jwt.sign(
      { username: user[0].username, id: user[0].id },
      'secret',
      { expiresIn: '5h' }
    );

    res.status(200).json({
      message: "Login success",
      username: user[0].username,
      token: token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

async function register(req, res) {
  try {
    const { username, email, password, nama_lengkap, bio, gambar_profil, role } = req.body;

    const newUser = {
      username, email, password, nama_lengkap, bio, gambar_profil, role
    };

    await UserModel.createUser(newUser);

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

module.exports = {
  login,
  register,
};