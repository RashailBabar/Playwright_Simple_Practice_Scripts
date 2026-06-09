const {test, expect} = require('@playwright/test');

test('Home Page', async({page})=>{

await page.goto('https://www.demoblaze.com/');
//const pagetitle = page.title();
//econsole.log();
await expect(page).toHaveTitle('STORE');

await page.close();



}) 