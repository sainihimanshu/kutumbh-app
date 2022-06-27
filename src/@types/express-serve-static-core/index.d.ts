// import * as express from 'express';

declare namespace Express {
  interface Response {
    ok: (payload: object | string | null) => void;
    err: (payload: object | string) => void;
  }
}
