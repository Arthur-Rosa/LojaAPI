const { Router } = require("express");
const userRoutes = require("./routerUser");
const UserController = require('../controller/UserController');
const authenticateToken = require('../middlewares/authenticateToken');

const router = Router();

// protegidas
// /api/user /
router.use('/user', userRoutes);

// /api/login
router.post('/login', (req, res) => {
    UserController.login(req, res)
});

module.exports = router;
