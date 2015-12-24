import Express from 'express';
import organisations from '../data/organisations'

let router = Express.Router();

router.get('/', (req, res) => {
  res.send(organisations);
});

export default router;


