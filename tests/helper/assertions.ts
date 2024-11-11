import { Page, expect, Locator } from '@playwright/test';
import { TIME_OUT } from './setAuthToken';

export class Assertions {
  public page;

  constructor(page: Page) {
    this.page = page;
  }

  async verifyElementHaveText(
    element: Locator,
    text: string,
    timeout: number = TIME_OUT,
  ): Promise<void> {
    await expect(element).toHaveText(text, { timeout });
  }

  async verifyElementHaveAttribute(
    element: Locator,
    attrName: string,
    attrValue: string,
    timeout: number = TIME_OUT,
  ): Promise<void> {
    await expect(element).toHaveAttribute(attrName, attrValue, { timeout });
  }

  async verifyElementIsVisible(
    element: Locator,
    timeout: number = TIME_OUT,
  ): Promise<void> {
    await expect(element).toBeVisible({ timeout });
  }

  async verifyElementIsPresent(
    element: Locator,
    count: number = 1,
  ): Promise<void> {
    await expect(element).toHaveCount(count);
  }

  async verifyElementIsEnabled(
    element: Locator,
    timeout: number = TIME_OUT,
  ): Promise<void> {
    await expect(element).toBeEnabled({ timeout });
  }

  async verifyPageUrl(
    pageUrl: string,
    timeout: number = TIME_OUT,
  ): Promise<void> {
    await expect(this.page).toHaveURL(pageUrl, { timeout });
  }

  async verifyPageTitle(
    titleName: string,
    timeout: number = TIME_OUT,
  ): Promise<void> {
    await expect(this.page).toHaveTitle(titleName, { timeout });
  }
}
