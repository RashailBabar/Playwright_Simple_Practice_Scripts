const{test, expect} = require('@playwright/test');

test('Single File Upload', async ({ page }) => {
await page.goto('https://testautomationpractice.blogspot.com/')
await page.waitForSelector("#singleFileInput");
await page.locator("#singleFileInput").setInputFiles("C:\\Users\\rasha\\Downloads\\RB-Resume-2.pdf");

await page.waitForTimeout(5000);


});

test.only('Multiple File Upload', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.waitForSelector("#multipleFilesInput");
    await page.locator("#multipleFilesInput").setInputFiles([
        "C:\\Users\\rasha\\Downloads\\RB-Resume-2.pdf",
        "C:\\Users\\rasha\\Downloads\\GPX213453985_auth_letter.pdf"
    ]); 
await page.waitForTimeout(5000);
})