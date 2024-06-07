import express from 'express'

import { register } from '../controllers/authentication';

const authenticationRouter = (router: express.Router) => {
    router.post('/auth/register', register);
}

export default authenticationRouter;