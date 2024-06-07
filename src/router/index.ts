import express from 'express'

import authenticationRouter from './authentication';
import userRouter from './users';

const router = express.Router();

export default (): express.Router => {
    authenticationRouter(router);
    userRouter(router)
    return router;
};