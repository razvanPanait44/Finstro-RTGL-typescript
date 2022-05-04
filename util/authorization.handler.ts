import { NextFunction } from "express";


export class AuthorizationHandler {

    public authorize(request: Request, response: Response, next: NextFunction) {
        try {
            let TENANT_ID = null;

            // if (request.headers.authorization) {
            //     const tenant = await getTenant(request);
            //     TENANT_ID = tenant.tenant_id;
            // } else if (
            //     request &&
            //     request.requestContext &&
            //     request.requestContext.authorizer &&
            //     request.requestContext.authorizer.principalId
            // ) {
            //     TENANT_ID = request.requestContext.authorizer.principalId;
            // } else {
            //     throw Error('Unauthorized');
            // }
            // request.TENANT_ID = TENANT_ID;
            next();
        } catch (error) {
            // console.error(err);
            // logger.error(error);
            // response.statusText('').json({
            //     message: 'Unauthorized. Invalid Api Key',
            // });
        }
    }
}