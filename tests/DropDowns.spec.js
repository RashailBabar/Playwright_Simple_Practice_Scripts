const { test, expect } = require('@playwright/test');

test('input box basic', async ({ page }) => {
 await page.goto('https://testautomationpractice.blogspot.com/', {
  waitUntil: 'commit'
});

  //const CountryDropdown = await page.locator('#country option');
 // await expect(CountryDropdown).toHaveCount(10);
//const Options = await page.$$('#country option')
  // console.log("Number of Options:", Options.length)

  const content = await page.locator('#country').textContent();
await expect(content.includes('India')).toBeTruthy();



  await page.waitForTimeout(5000);

});

