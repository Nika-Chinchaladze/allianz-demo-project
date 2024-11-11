import { test as base, expect } from '@playwright/test';
import { ClaimPage } from '../pageObjects/claim.page';

type MyFixtures = {
  claimPage: ClaimPage;
};

export const test = base.extend<MyFixtures>({
  claimPage: async ({ page }, use) => {
    await use(new ClaimPage(page));
  },
});

export { expect } from '@playwright/test';

export function step(stepName?: string) {
  return function decorator(
    target: Function,
    context: ClassMethodDecoratorContext,
  ) {
    return function replacementMethod(
      this: any,
      ...args: any
    ): Promise<any> | any {
      const methodName = context.name as string;
      const className = this.name as string;
      const finalName: string = stepName
        ? `${stepName}, { ${className} }`
        : `${methodName}, { ${className} }`;
      return test.step(finalName, async () => {
        const result = target.call(this, ...args);
        return Promise.resolve(result);
      });
    };
  };
}

export function hydrated() {
  return function decorator(target: Function) {
    return function replacementMethod(this: any, ...args: any) {
      return expect(async () => {
        await target.call(this, ...args);
      }).toPass();
    };
  };
}
