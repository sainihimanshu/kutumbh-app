import { Request, Response } from 'express';
import Relation, { IRelation } from '../models/relation.model';

class RelationController {
  private static instance: RelationController;

  static get(): RelationController {
    if (!RelationController.instance) RelationController.instance = new RelationController();
    return RelationController.instance;
  }

  async create(req: Request, res: Response) {
    const relation = await Relation.create(req.body);
    res.ok(relation);
  }

  async update(req: Request, res: Response) {
    const { id } = req.params;
    const payload = <IRelation>req.body;

    const relation = await Relation.findByIdAndUpdate(id, payload, { new: true });

    if (relation === null) {
      res.err('Error');
      return;
    }

    res.ok(relation);
  }

  async getAll(req: Request, res: Response) {
    const filter: any = {};

    const relations: IRelation[] = await Relation.find(filter);

    res.ok(relations);
  }

  async getById(req: Request, res: Response) {
    const relation = await Relation.findById(req.body);
    res.ok(relation);
  }
}

const controller = RelationController.get();
export { controller as RelationController };
