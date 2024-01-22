//controllers/ProfileController.js
const ProfileModel = require("../models/usermodels");

async function users(req, res) {
  try {
    const user = await ProfileModel.getAllUsers();
    res.json({ data: user });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
}

async function getProfileByUsername(req, res) {
  try {
    const { username } = req.params;
    const user = await ProfileModel.getProfileByUsername(username);

    if (!user || user.length === 0) {
      return res.status(404).json({ message: "User profile not found" });
    }

    res.status(200).json({
      message: "User found",
      data: user[0],
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
}

async function editProfile(req, res) {
  try {
    const userdata = req.body;
    const {id} = req.params;
    console.log(userdata);
    console.log(id);
    await ProfileModel.editprofile(userdata, id)
    res.status(200).json({ message: "Profile updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
}

module.exports = {
  getProfileByUsername,
  users,
  editProfile,
};
