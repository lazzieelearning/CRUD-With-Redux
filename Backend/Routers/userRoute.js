import express from "express";
import { createUser, deleteUser, getUser, updateUser } from "../Controllers/userController.js";

const router = express.Router()

router.get("/get-user",getUser)
router.post("/create-user",createUser)
router.put("/update-user/:id",updateUser)
router.delete("/delete-user/:id",deleteUser)

export default router;
