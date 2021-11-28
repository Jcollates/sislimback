import {Request,Response}  from 'express';
import {getRepository, createConnection}  from 'typeorm';
import {User} from '../entity/user';
export const getUsers = async (req: Request, res: Response): Promise<Response> =>{
    const users = await getRepository(User).find();
    return res.json(users);
}