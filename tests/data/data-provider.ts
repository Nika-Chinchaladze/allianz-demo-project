import { IUser } from './data-types';

export class DataProvider {
  private readonly apiUserData: IUser = require('./test-data/test-user.json');

  public getApiUserData(): IUser {
    return this.apiUserData;
  }
}
