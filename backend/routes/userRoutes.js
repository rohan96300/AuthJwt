import express from "express";
import { authUser } from "../controller/userController.js";

const router = express.Router();

router.route('/signin').post(authUser);

export default router;

