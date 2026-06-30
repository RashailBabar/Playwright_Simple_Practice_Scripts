import {test , expect} from '@playwright/test';

test('Page Screenshot Test', async ({ page }) => {

    await page.goto('https://www.demoblaze.com/');
    await page.screenshot({ path: 'tests\\ScreenShot\\' + Date.now() + 'HomePage.png' });

})
test('Full Page Screenshot Test', async ({ page }) => {

    await page.goto('https://www.demoblaze.com/');
    await page.waitForTimeout(5000);
    await page.screenshot({ path: 'tests\\ScreenShot\\' + Date.now() + 'HomePage.png', fullPage: true });

})
test.only('Element Screenshot Test', async ({ page }) => {

    await page.goto('https://www.demoblaze.com/');
    await page.waitForTimeout(5000);
    await page.locator("(//div[@class='card h-100'])[1]").screenshot({ path: 'tests\\ScreenShot\\' + Date.now() + 'Macbook.png' });

})