import { test, expect } from '@playwright/test';

test.only('Modal Alert', async ({ page }) => {
  await page.goto(
    'https://www.testmuai.com/selenium-playground/bootstrap-modal-demo/',
    { waitUntil: 'networkidle' }
  );

  const launchButton = page.locator('button[data-target="#myModal"]');

  await expect(launchButton).toBeVisible();
  await launchButton.click();

  const modal = page.locator('#myModal');
  await expect(modal).toBeVisible();


});