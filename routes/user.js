import { Router } from 'express';
import { registerUser, loginUser } from '../controllers';
import {
  validateLogin, validateSignup, checkIfUserExists, cloudinary,
} from '../middlewares';

const userRouter = Router();

userRouter.post('/register', validateSignup, checkIfUserExists, cloudinary, registerUser);
userRouter.post('/login', validateLogin, loginUser);

export default userRouter;
