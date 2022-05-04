import { NextFunction, Request, Response, Router } from 'express';
import { AccountModel } from '../../dto/account.model';
import { AccountService } from './account.service';
import { logger } from '../../util/logger.handler'

export class AccountController {

    public static async get(req: Request, res: Response, next: NextFunction) {

        try {
            const requestBody: AccountModel = req.body;
            const TENANT_ID: string = '1';

            const response = await new AccountService().getAccount(requestBody, TENANT_ID);

            if (response) {
                res.status(200).send(response);
            } else {
                logger.error('');
                res.status(400)
            }
        } catch (e) {
            logger.error('');
            next(e);
        }
    }
}