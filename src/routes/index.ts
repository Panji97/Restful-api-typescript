import {getUser,createUser, getUserById, updateUser, deleteUser} from '../controllers/userControllers'

import { Router, Request, Response } from 'express';

const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.json({msg:"Express + TypeScript Server"});
});

router.route("/user").get(getUser).post(createUser)


router.route('/user/:id').get(getUserById).patch(updateUser).delete(deleteUser)



export default router;
