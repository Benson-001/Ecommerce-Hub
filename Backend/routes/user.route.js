import express from "express";
import {
  updateUser,
  getAllUsers,
  getOneUser,
  deleteUser,
} from "../controller/user.controller.js";
const router = express.Router();

// GET ALL USERS ROUTE
router.get("/", getAllUsers);

// DELETE USER ROUTE
router.delete("/:id", deleteUser);

// UPDATE USER ROUTE
router.post("/:id", updateUser);

// GET ONE USER ROUTE
router.put("/find/:userId", getOneUser);

export default router;
