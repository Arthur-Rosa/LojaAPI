const { Router } = require("express");
const userRoutes = require("./routerUser");

const router = Router();

// /api/user /
router.use('/user', userRoutes);

module.exports = router;
