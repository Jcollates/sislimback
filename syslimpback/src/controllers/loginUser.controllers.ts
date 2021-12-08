import { Request, Response } from 'express';
import bcrypt from 'bcrypt';

import { getRepository, createConnection } from 'typeorm';
import { LoginUser } from '../entity/loginuser';

export const getLoginUsers = async (req: Request, res: Response): Promise<Response> => {
    const loginUsers = await getRepository(LoginUser).find();
    return res.json(loginUsers);
}
export const doLogin = async (req: Request, res: Response): Promise<Response> => {
    let compare: any;
    const error = {
        message: "Error ocurred",
        code: "01"
    }
    const loginUsers = await getRepository(LoginUser).findOne({ username: req.body.username });
    if (loginUsers?.username == req.body.username && loginUsers?.password != undefined) {
        let encrypted = loginUsers.password;
        compare = await bcrypt.compare(req.body.password, encrypted);
        if (compare) {
            return res.json(loginUsers);
        } else {
            throw new Error('An error occurred retriving data');
        }
    }

    return res.json(error)

}
export const createUser = async (req: Request, res: Response): Promise<Response> => {
    // const newUSerLogin = getRepository(LoginUser).create(req.body);
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    const loginUSer = {
        username: req.body.username,
        password: await bcrypt.hash(req.body.password, saltRounds),
        token: req.body.token,
        salt: salt,
        changepassnextenter: req.body.changepassnextenter,
        duedatepass: req.body.duedatepass,
        status: req.body.status,
        datecreate: req.body.datecreate,
        datelastmodify: req.body.datelastmodify,
        loginusercol: req.body.loginusercol
    };
    const whatSAve = await getRepository(LoginUser).save(loginUSer);
    return res.json(whatSAve);

}
export const updateLoginUSer = async (req: Request, res: Response): Promise<Response> => {
    let updateUserLogin = await getRepository(LoginUser).findOne(req.body.codeuser);
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    if (updateUserLogin) {
        updateUserLogin.password = await bcrypt.hash(req.body.password, saltRounds);
        updateUserLogin.salt = salt;
        const whatSAve = await getRepository(LoginUser).save(updateUserLogin);
        return res.json(whatSAve);
    }
    return res.status(404).json({msg: "USER NO FOUND"});

}
