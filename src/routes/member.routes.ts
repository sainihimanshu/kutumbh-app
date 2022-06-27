import { Router } from 'express';
import { MemberController } from '../controllers/member.controller';

const memberRouter = Router();

memberRouter.route('/').get(MemberController.getAll).post(MemberController.create);
memberRouter.route('/:id').get(MemberController.getById).put(MemberController.update);

export default memberRouter;
