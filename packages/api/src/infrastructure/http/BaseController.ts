import { NextFunction, Request, Response } from 'express';
import { injectable } from 'inversify';

@injectable()
export abstract class BaseController {
  protected abstract executeImpl(req: Request, res?: Response): Promise<any>;

  public constructor() {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    this.execute = this.execute.bind(this);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    this.executeImpl = this.executeImpl.bind(this);
  }

  private ok<T>(req: Request, res: Response, dto?: T): Response {
    if (req.query.redirectTo) {
      // eslint-disable-next-line @typescript-eslint/no-base-to-string
      res.append(`Deprecation`, `WARNING - endpoint is deprecated, use ${req.query.redirectTo.toString()} instead`);
    }

    const statusCode = res.get(`Deprecation`) ? 299 : 200;
    if (dto) {
      return res.status(statusCode).json(dto);
    }
    return res.sendStatus(statusCode);
  }

  public async execute(req: Request, res: Response, next: NextFunction): Promise<any> {
    try {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const data = await this.executeImpl(req, res);
      if (res.headersSent) {
        return;
      }

      this.ok(req, res, data);
    } catch (error) {
      next(error);
    }
  }
}
