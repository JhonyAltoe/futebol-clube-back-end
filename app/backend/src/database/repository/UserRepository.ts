import User from '../models/Users';
import IUser from '../entities/IUser';

class UserRepository {
  private user = User;

  public async login(email: string): Promise<IUser | null> {
    const user: IUser | null = await this.user.findOne({ where: { email } });
    return user;
  }
}

export default UserRepository;
