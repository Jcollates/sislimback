import {Request,Response}  from 'express';
import {getRepository, createConnection}  from 'typeorm';
import {User} from '../entity/user';
export const getUsers = async (req: Request, res: Response): Promise<Response> =>{
    const users = await getRepository(User).find();
    return res.json(users);
}
export const getUniqueUSer = async (req: Request, res: Response): Promise<Response> =>{
    const users = await getRepository(User).findOne({loginuser_codeuser: Number(req.params.loginuser_codeuser)});
    return res.json(users);
}
export const saveNewUser= async (req: Request, res: Response): Promise<Response> =>{
    const user = await getRepository(User).save(req.body);
    return res.json(user);
}
export const updateUserData = async (req: Request, res: Response): Promise<Response> =>{
    const user = await getRepository(User).save(req.body);
    return res.json(user);
}