import express from "express";
import {
  deleteUser,
  getUsers
} from "../controllers/user.js";


const router = express.Router();


//DELETE
router.delete("/:id",  deleteUser);


//GET ALL
router.get("/", getUsers);

export default router;

