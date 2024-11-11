import { test } from '../fixtures/base';

test.describe('Test allyz-widgets', async () => {
  test(
    'should transfer user to claim page',
    { tag: ['@dev', '@uat'] },
    async ({ claimPage }) => {
      await claimPage.navigateToClaimPage();
      await claimPage.providePolicyId();
      await claimPage.checkUserIsTransferred();
    },
  );
});
