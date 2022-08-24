import { Router } from 'express';
import Factory from '../Factory';
import { Aunth } from '../middlewares';

const matcheRouter = Router();
const matcheController = Factory.matche();

matcheRouter.get('/matches', matcheController.getAll);
matcheRouter.post('/matches', Aunth.tokenJWT, matcheController.saveMatch);

export default matcheRouter;
