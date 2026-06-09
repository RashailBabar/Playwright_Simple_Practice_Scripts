const { test, expect } = require('@playwright/test');

test('input box basic', async ({ page }) => {
 await page.goto('https://testautomationpractice.blogspot.com/', {
  waitUntil: 'commit'
});
await page.selectOption('#colors', ['Blue', 'Red', 'Yellow']);




  await page.waitForTimeout(5000);

});