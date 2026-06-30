const{test, expect} = require('@playwright/test');

test('Date Picker', async ({ page }) => {
await page.goto('https://testautomationpractice.blogspot.com/')
await page.locator('#draggable').dragTo(await page.locator('#droppable'));

await page.waitForTimeout(5000);



})