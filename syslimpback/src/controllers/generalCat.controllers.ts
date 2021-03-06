import { Request, Response } from 'express';
import { getRepository, createConnection } from 'typeorm';
import { GeneralCat } from '../entity/generalcat';


export const getGeneralCats = async (req: Request, res: Response): Promise<Response> => {
    const generalCats = await getRepository(GeneralCat).find();
    return res.json(generalCats);
}
export const getBycodeCat = async (req: Request, res: Response): Promise<Response> => {
    const getBycodes = await getRepository(GeneralCat).find({ codeCat: req.params.codeCat });
    return res.json(getBycodes);
}
export const getBycodeCatAndFather = async (req: Request, res: Response): Promise<Response> => {
    const getBycodeFather = await getRepository(GeneralCat).find(
        {
            codeCat: req.params.codeCat,
            codeFather: req.params.codeFather,
            codeCatFather: req.params.codeCatFather
        }
    );
    return res.json(getBycodeFather);
}