import { expect, Page, Locator } from '@playwright/test';

export class Actions {
  public page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto(url: string): Promise<void> {
    try {
      await this.page.goto(url, { waitUntil: 'domcontentloaded' });
    } catch (error) {
      console.error(`Error navigating to "${url}":`, error);
      throw error;
    }
  }

  async getTitle(): Promise<string> {
    return await this.page.title();
  }

  async clickOnElement(element: Locator) {
    try {
      const count = await element.count();
      if (count === 0) {
        throw new Error(`Element "${element}" does not exist.`);
      }
      await expect(element).toBeVisible();
      await expect(element).toBeEnabled();
      await element.waitFor({ state: 'attached' });
      await element.click();
    } catch (error) {
      console.error(`Error clicking on element "${element}:"`, error);
      throw error;
    }
  }

  async setValueInField(element: Locator, text: string) {
    try {
      const count = await element.count();
      if (count === 0) {
        throw new Error(`Input element "${element}" does not exist.`);
      }
      expect(element).toBeTruthy();
      await expect(element).toBeVisible();
      await expect(element).toBeEnabled();
      await element.click();
      await expect(element).toBeFocused();
      await element.fill('');
      await element.fill(text);
    } catch (error) {
      console.error(
        `Error setting value in input element "${element}:"`,
        error,
      );
      throw error;
    }
  }

  async selectDropDownList(element: Locator, text: string) {
    try {
      const count = await element.count();
      if (count === 0) {
        throw new Error(`Element "${element}" does not exist.`);
      }
      await expect(element).toBeVisible();
      await expect(element).toBeEnabled();
      await element.selectOption({ label: text });
    } catch (error) {
      console.error(
        `Error selecting option "${text}" from dropdown "${element}":`,
        error,
      );
      throw error;
    }
  }

  async moveToElement(element: Locator): Promise<void> {
    try {
      const count = await element.count();
      if (count === 0) {
        throw new Error(`Element "${element}" does not exist.`);
      }
      await expect(element).toBeVisible();
      await element.scrollIntoViewIfNeeded();
    } catch (error) {
      console.log(error);
    }
  }

  async scrollDown(): Promise<void> {
    await this.page.evaluate(() => {
      window.scrollTo(0, document.body.scrollHeight);
    });
  }

  async setToken(myToken: string): Promise<void> {
    await this.page.evaluate(token => {
      const idToken = { token: token };
      localStorage.setItem('idToken', JSON.stringify(idToken));
    }, myToken);
    await this.page.reload();
  }
}
