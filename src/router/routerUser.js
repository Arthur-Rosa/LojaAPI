const { Router } = require("express");
const UserController = require("../controller/UserController");

const router = Router();

// Configurar as Rotas ( CRUD )
// obj
router.post("/", validateUser, (req, res) => {
  UserController.create(req, res);
});

router.get("/", (req, res) => {
  UserController.getAll(req, res);
});

router.delete("/:id", validateUserId, (req, res) => {
  UserController.delete(req, res);
});
// /api/users/:id -> /api/users/3217 ( Params )
// /api/users?id=3216 -> ( Query )
// /api/search?s=Arthur%Rosa -> ( Query )
// { body: { id: "3212" } } -> ( Body )
router.put("/:id", validateUserId, validateUser, (req, res) => {
  UserController.update(req, res);
});

router.get("/:id", validateUserId, (req, res) => {
  UserController.getOne(req, res);
});

module.exports = router;