import express, { Application } from 'express';
import { routes } from './routes';

// Boot express
export const app: Application = express();
const PORT = process.env.PORT || 3001;

// Application routing
routes(app);

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});
