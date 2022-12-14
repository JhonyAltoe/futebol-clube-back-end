import { Request, Response } from 'express';
import IMatcheService from '../services/MatcheService/IMatcheService';
import { controllerWrapper, Leaderboard } from '../utils';

export default class LeaderboardController {
  constructor(
    private matcheService: IMatcheService,
    private leaderboard: Leaderboard,
  ) {}

  public homeTeamboard = controllerWrapper(async (_req: Request, res: Response) => {
    const matches = await this.matcheService.getAll({ inProgress: false });
    const orded = this.leaderboard.generate(matches, 'homeTeam');
    res.status(200).json(orded);
  });

  public awayTeamboard = controllerWrapper(async (_req: Request, res: Response) => {
    const matches = await this.matcheService.getAll({ inProgress: false });
    const orded = this.leaderboard.generate(matches, 'awayTeam');
    res.status(200).json(orded);
  });

  public bothTeamboard = controllerWrapper(async (_req: Request, res: Response) => {
    const matches = await this.matcheService.getAll({ inProgress: false });
    const both = this.leaderboard.bothLeaderboards(matches);
    res.status(200).json(both);
  });
}
