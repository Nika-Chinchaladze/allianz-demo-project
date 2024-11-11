import { Page } from '@playwright/test';
import { Actions } from '../helper/actions';
import { Assertions } from '../helper/assertions';
import { Waiters } from '../helper/waiters';

export class BasePage {
  public name: string = 'Base Page';
  public page;
  public actions;
  public assertions;
  public waiters;
  public urlMap: { dev: string; uat: string } = {
    dev: process.env.DEV_BASE_URL as string,
    uat: process.env.UAT_BASE_URL as string,
  };
  public baseUrl: string =
    this.urlMap[(process.env.ENV as 'dev' | 'uat') || 'dev'];

  constructor(page: Page) {
    this.page = page;
    this.actions = new Actions(this.page);
    this.assertions = new Assertions(this.page);
    this.waiters = new Waiters(this.page);
  }
}
