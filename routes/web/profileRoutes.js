//routes/web/profileRoute.js
const express = require("express");
const routes = express.Router();
const userController = require("../../controller/profileController");
const authController = require("../../controller/authController");
const authenticateToken = require("../../middleware/authenticateToken");

routes.get('/', userController.users);
routes.post('/login', authController.login)
routes.post('/register', authController.register)
routes.patch('/:id', userController.editProfile)
routes.get('/:username', authenticateToken, userController.getProfileByUsername);

module.exports = routes;
