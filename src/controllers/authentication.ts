import express from 'express';
import { random, authentication } from '../helpers';

import { getUserByEmail, createUser } from '../models/users';

export const register = async (req: express.Request, res: express.Response) => {
    try {
        const {email, password, username} = req.body;

        if(!email || !password || !username) {
            return res.sendStatus(400);
        }

        const existingUser = await getUserByEmail(email);

        if (existingUser) {
            return res.sendStatus(400);
        }

        const salt = random();
        const user = await createUser({
            email,
            username,
            authentication: {
                salt,
                password: authentication(salt,password)
            },
        })
        console.log('Newly created user:', user);

        return res.status(200).json(user);

    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
}