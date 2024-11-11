import { Page, Locator } from '@playwright/test';
import { TIME_OUT } from './setAuthToken';

export class Waiters {
  public page;

  constructor(page: Page) {
    this.page = page;
  }

  async waitForSelector(
    element: Locator,
    amount: number = TIME_OUT,
    state: 'attached' | 'detached' | 'visible' | 'hidden' = 'visible',
  ): Promise<void> {
    await element.waitFor({ timeout: amount, state });
  }

  async waitForTimeOut(amount: number = TIME_OUT): Promise<void> {
    if (amount < 0) {
      throw new Error('Timeout duration must be a non-negative number.');
    }
    await this.page.waitForTimeout(amount);
  }

  async waitForUrl(url: string, amount: number = TIME_OUT): Promise<void> {
    await this.page.waitForURL(url, { timeout: amount });
  }
}
