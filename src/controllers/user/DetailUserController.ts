import { Request, Response } from 'express'
import { DetailUserservice } from '../../services/user/DetailUserservice';
class DetailUserController{
    async handle(req: Request, res: Response) {

        const detailUserservice = new DetailUserservice();

        const user = await detailUserservice.execute();

        return res.json(user);
    }
}

export { DetailUserController }
