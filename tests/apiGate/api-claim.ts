import ApiBase from './api-base';
import { setApiAccessToken } from '../helper/setAuthToken';
import { type IHeaderType } from '../data/data-types';
import { DataProvider } from '../data/data-provider';
import { type IUser } from '../data/data-types';

const dataProvider = new DataProvider();
const users: IUser = dataProvider.getApiUserData();

export class ApiClaim extends ApiBase {
  public postAuthTokenUrl(): string {
    return `${this.apiBaseUrl}/jwtauth/idtoken`;
  }

  public async postAuthToken(): Promise<void> {
    const headers: IHeaderType = {
      Authorization:
        'Basic ' +
        btoa(
          `${users.userCredentials.username}:${users.userCredentials.password}`,
        ),
      'Content-Type': 'application/json',
    };
    const bodyInfo = await this.postMethod(
      this.postAuthTokenUrl(),
      headers,
      users.userLoginData,
    );
    setApiAccessToken(bodyInfo.token);
  }
}
