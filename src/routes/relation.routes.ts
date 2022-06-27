import { Router } from 'express';
import { RelationController } from '../controllers/relation.controller';

const relationRouter = Router();

relationRouter.route('/').get(RelationController.getAll).post(RelationController.create);
relationRouter.route('/:id').get(RelationController.getById).put(RelationController.update);

export default relationRouter;
