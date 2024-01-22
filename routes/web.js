//routes/web.js
const express = require("express");
const routes = express.Router();
const profileRoutes = require('./web/profileRoutes');

routes.use('/profile', profileRoutes);

module.exports = routes;
