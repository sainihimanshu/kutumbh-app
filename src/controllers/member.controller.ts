import { Request, Response } from 'express';
import Member, { IMember } from '../models/member.model';

class MemberController {
  private static instance: MemberController;

  static get(): MemberController {
    if (!MemberController.instance) MemberController.instance = new MemberController();
    return MemberController.instance;
  }

  async create(req: Request, res: Response) {
    const member = await Member.create(req.body);
    res.ok(member);
  }

  async update(req: Request, res: Response) {
    const { id } = req.params;
    const payload = <IMember>req.body;

    const member = await Member.findByIdAndUpdate(id, payload, { new: true });

    if (member === null) {
      res.err('Error');
      return;
    }

    res.ok(member);
  }

  async getAll(req: Request, res: Response) {
    const { query } = req;

    const filter: any = {};

    if (query.name) {
      filter.name = new RegExp(query.name as string, 'ig');
    }

    const members: IMember[] = await Member.find(filter);

    res.ok(members);
  }

  async getById(req: Request, res: Response) {
    const member = await Member.findById(req.body);
    res.ok(member);
  }

  async removemember(req: Request, res: Response) {
    // todo: implement it later
  }
}

const controller = MemberController.get();
export { controller as MemberController };
