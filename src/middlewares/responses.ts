import { Request, Response, NextFunction } from 'express';

export const enrichResponses = (req: Request, res: Response, next: NextFunction) => {
  res.ok = (payload: object | string | any) => {
    let resObj = payload;
    if (typeof payload === 'string') resObj = { msg: payload };
    res.status(200).json(resObj);
  };

  res.err = (payload: object | string) => {
    let resObj = payload;
    if (typeof payload === 'string') resObj = { msg: payload };
    res.status(500).json(resObj);
  };

  next();
};
