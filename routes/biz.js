const express = require('express');
const bizRouter = express.Router();
const authControllers = require('../controllers/auth.js');
const {protect} = require('../middlewares/authentication')
// const { errorWrapper } = require('../common/utility');


bizRouter.post('/register', authControllers.register)
bizRouter.post('/login',authControllers.login)
bizRouter.route("/profile").get(protect, authControllers.getUserProfile).put(protect, authControllers.updateUserProfile);


module.exports = bizRouter;