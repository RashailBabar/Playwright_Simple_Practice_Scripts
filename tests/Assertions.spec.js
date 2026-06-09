import {test, expect} from '@playwright/test';

test('Assertions', async({page})=>{

await page.goto('https://demo.nopcommerce.com/register?returnUrl=%2F')
//await page.waitForLoadState('networkidle');
await expect(page).toHaveURL('https://demo.nopcommerce.com/register?returnUrl=%2F');
await expect(page).toHaveTitle('nopCommerce demo store. Register');

const serachbox = await page.locator('#small-searchterms');
await expect(serachbox).toBeEnabled();

const RadioButton = await page.locator('#gender-male');
await RadioButton.click();
await expect(RadioButton).toBeChecked();

const Checkbox = await page.locator('#NewsLetterSubscriptions_0__IsActive');
//await Checkbox.scrollIntoViewIfNeeded();

//await Checkbox.click();
await expect(Checkbox).toBeChecked();



});