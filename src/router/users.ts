import express from 'express'

import { getAllUsers, deleteUser } from '../controllers/users';
import { isAuthenticated } from '../middlewares';

const userRouter = (router: express.Router) => {
    router.get('/users', isAuthenticated, getAllUsers);
    router.delete('/users/:id', deleteUser);
}

export default userRouter;    