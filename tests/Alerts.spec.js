const { test, expect } = require('@playwright/test');

test.skip('Alert with OK', async ({ page }) => {

await page.goto('https://testautomationpractice.blogspot.com/');

//Enabling alert handling
page.on('dialog', async dialog => {
expect(dialog.type()).toContain('Alert');
expect(dialog.message()).toContain('Press a button!');
await dialog.accept(); //To click on OK button
//await dialog.dismiss(); //To click on Cancel button


});
await page.click("//button[@id='confirmBtn']");
await expect(page.locator("//p[@id='demo']")).toHaveText('You pressed OK!');
await page.waitForTimeout(5000);


});

test.skip('Alert with Cancel', async ({ page }) => {

await page.goto('https://testautomationpractice.blogspot.com/');

//Enabling alert handling
page.on('dialog', async dialog => {
expect(dialog.type()).toContain('confirm');
expect(dialog.message()).toContain('Press a button!');
await dialog.accept(); //To click on OK button
//await dialog.dismiss(); //To click on Cancel button


});
await page.click("//button[@id='confirmBtn']");
await expect(page.locator("//p[@id='demo']")).toHaveText('You pressed OK!');
await page.waitForTimeout(5000);


});

test('Prompt dialog box', async ({ page }) => {

await page.goto('https://testautomationpractice.blogspot.com/');

//Enabling alert handling
page.on('dialog', async dialog => {
expect(dialog.type()).toContain('prompt');
expect(dialog.message()).toContain('Please enter your name:');
expect(dialog.defaultValue()).toContain('Harry Potter');


await dialog.accept('Rashail Babar Ali'); //To click on OK button
//await dialog.dismiss(); //To click on Cancel button


});
await page.click("//button[@id='promptBtn']");
await expect(page.locator("//p[@id='demo']")).toHaveText('Hello Rashail Babar Ali! How are you today?');
await page.waitForTimeout(10000);


})