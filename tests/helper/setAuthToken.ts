export const TIME_OUT: number = 5000;
export let AUTH_TOKEN: string;

export function setApiAccessToken(newValue: string): void {
  AUTH_TOKEN = newValue;
}
