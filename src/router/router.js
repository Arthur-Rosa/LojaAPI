const { Router } = require("express");
const userRoutes = require("./routerUser");
const UserController = require('../controller/UserController');
const authenticateToken = require('../middlewares/authenticateToken');

const uploadRoutes = require('./routerUpload');

const router = Router();

// /api/images/upload 
router.use('/image', uploadRoutes);

// protegidas
// /api/user /
router.use('/user', userRoutes);

// /api/login
router.post('/login', (req, res) => {
    UserController.login(req, res)
});

module.exports = router;
