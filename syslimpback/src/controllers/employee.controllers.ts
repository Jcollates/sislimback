import {Request,Response}  from 'express';
import {getRepository, createConnection, IsNull, Not}  from 'typeorm';
import {Employee} from '../entity/employee';
export const getEmployees = async (req: Request, res: Response): Promise<Response> =>{
    const employees = await getRepository(Employee).find();
    return res.json(employees);
}

export const createEmployee  = async (req: Request, res: Response): Promise<Response> =>{
    const whatSAve = await getRepository(Employee).save(req.body);
    return res.json(whatSAve);
    
}
export const updateEmploye  = async (req: Request, res: Response): Promise<Response> =>{
    const whatSAve = await getRepository(Employee).save(req.body);
    return res.json(whatSAve);
    
}
export const  getEmployeesToAssing = async (req: Request, res: Response): Promise<Response> =>{
    const employees = await getRepository(Employee).find({assigmentdayte: IsNull() });
    return res.json(employees);
}

export const getEmployeesAssigned = async (req: Request, res: Response): Promise<Response> =>{
    const employees = await getRepository(Employee).find({assigmentdayte: Not(IsNull()) });
    return res.json(employees);
}