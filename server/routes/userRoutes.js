import { Router } from "express";
import { registrationUser, loginUser } from "../controller/userController";

const router = new Router();

router.post('/registration', registrationUser);
router.post('/login', loginUser)

export default router; 
