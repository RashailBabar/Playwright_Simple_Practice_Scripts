const{test, expect} = require('@playwright/test');

test('Date Picker', async ({ page }) => {

await page.goto('https://www.demoblaze.com/');
const categories = await page.locator('.nav-link');

//mouse hover on categories
await categories.nth(0).hover();
await categories.nth(1).hover();
//await categories.nth(2).hover();


await page.waitForTimeout(5000);





})