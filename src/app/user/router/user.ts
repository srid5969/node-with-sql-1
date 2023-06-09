import { Express } from "express";
import { deleteUserController, editUser, getUserByIdController, listAllUsers, saveUser } from "../controller/user";
import validate from "common/validate/middleware";
import { User } from "../model/user";
let router: Express = require("express").Router();

router.post("/users", validate(User, ["signUp"]), saveUser);
router.get("/users", listAllUsers);
router.get("/users/:id", editUser);
router.get("/users/:id", deleteUserController);
router.get("/users/:id", getUserByIdController);

export { router as userRouter };
