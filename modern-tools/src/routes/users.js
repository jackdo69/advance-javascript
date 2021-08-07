import express from "express";
import User from "../controllers/user";

const userController = new User();
const router = express.Router();

router.get("/", function (req, res, next) {
  const data = userController.getAll();
  res.send(data);
});

router.get("/:id", function (req, res, next) {
  const { id } = req.params;
  const data = userController.getById(id);
  res.send(data);
});

export default router;
