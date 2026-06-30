import {test , expect} from '@playwright/test';

test('Recording Test', async ({ page }) => {

 await page.goto('https://demoblaze.com/');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('#loginusername').click();
  await page.locator('#loginusername').fill('RBA');
  await page.locator('#loginpassword').click();
  await page.locator('#loginpassword').fill('RBA@654');
  await expect(page.locator('#loginpassw')).toHaveValue('RBA@654');


})