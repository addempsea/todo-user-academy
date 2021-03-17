import { Router } from 'express';
import { registerUser, loginUser } from '../controllers';
import { validateLogin, validateSignup, checkIfUserExists } from '../middlewares';

const userRouter = Router();

userRouter.post('/register', validateSignup, checkIfUserExists, registerUser);
userRouter.post('/login', validateLogin, loginUser);

export default userRouter;
