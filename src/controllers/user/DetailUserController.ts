import { Request, Response } from 'express'
import { DetailUserservice } from '../../services/user/DetailUserservice';
class DetailUserController{
    async handle(req: Request, res: Response) {
        const user_id = req.user_id;

        // console.log("ID DO USER: ", user_id)

        const detailUserservice = new DetailUserservice();

        const user = await detailUserservice.execute(user_id);

        return res.json(user);
    }
}

export { DetailUserController }
