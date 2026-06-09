const { test, expect } = require('@playwright/test');




test('input box basic', async ({ page }) => {
  await page.goto('https://www.redbus.in/');

  const fromInput = page.locator("input#srcinput");
  await fromInput.fill('Delh');

   const suggestion = page.getByRole('option', {
    name: /Majnu Ka Tilla/i
  });
await page.pause();
  await expect(suggestion).toBeVisible();
  await suggestion.click();
await page.pause();
});