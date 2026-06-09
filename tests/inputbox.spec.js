const { test, expect } = require('@playwright/test');

test('input box basic', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');
  //await page.setContent('<input id="name" />');
//   const input = page.locator('#name');
//   await input.fill('hello');
//   await expect(input).toHaveValue('hello');
const Name = await page.locator("//input[@id='name']");

await expect(Name).toBeVisible();
await expect(Name).toBeEmpty();
await expect(Name).toBeEditable();
await expect(Name).toBeEnabled();
await page.fill("//input[@id='name']", 'John');

await page.waitForTimeout(5000);





});
