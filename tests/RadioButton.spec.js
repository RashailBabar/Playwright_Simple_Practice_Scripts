import {test,expect} from '@playwright/test';

test('input box basic', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');
 
const RadioButtonMale = await page.locator("//input[@id='male']");
const RadioButtonFemale = await page.locator("//input[@id='female']");

//await expect(RadioButtonMale).toBeVisible();
await page.check("//input[@id='male']");
await expect(await RadioButtonMale).toBeChecked();
await expect(await RadioButtonMale.isChecked()).toBeTruthy();

await expect(await RadioButtonFemale.isChecked()).toBeFalsy();




await page.waitForTimeout(5000);
});