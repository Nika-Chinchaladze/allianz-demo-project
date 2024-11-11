export interface IHeaderType {
  Authorization?: string;
  'Content-Type': string;
}

export interface ICredentials {
  username: string;
  password: string;
}

export interface ILoginData {
  scope: string;
  claims: {
    sub: string;
    aud: string;
    email: string;
    given_name: string;
    family_name: string;
    residence: string;
  };
}

export interface IUser {
  userCredentials: ICredentials;
  userLoginData: ILoginData;
}
