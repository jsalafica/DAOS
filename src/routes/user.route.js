import { Router } from "express";
import { userController } from "../controllers/user.controller.js";

const router = Router();

router
  .route("/")
  .get(userController.getAllUsers)
  .post(userController.createUser);

router
  .route("/:id")
  .get(userController.getUserById)
  .put(userController.updateUserById)
  .delete(userController.deleteUserById);

export const userRouter = router;
