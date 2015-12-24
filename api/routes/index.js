import Express from 'express';
import organisation from './organisation';

let router = Express.Router();

router.use('/organisation', organisation);

export default router;