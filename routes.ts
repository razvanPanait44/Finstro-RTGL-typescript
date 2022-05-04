import { Application, Router } from 'express';
import { AccountController } from './modules/account/account.controller';

const _routes: [string, any][] = [
    ['/account/get', AccountController.get],
];

export const routes = (app: Application) => {
    _routes.forEach((route) => {
        const [url, controller] = route;
        app.use(url, controller);
    });
};

// const router = Router();
// router.get('/account/get', AccountController.get);

// export default router;