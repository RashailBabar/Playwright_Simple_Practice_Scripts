import {test,expect} from '@playwright/test';
 test('Checkboxes', async ({ page }) => {

await page.goto('https://testautomationpractice.blogspot.com/');
const CheckBox1 = await page.locator("//input[@id='sunday']");
 await CheckBox1.check();
await expect(CheckBox1).toBeChecked();


const CheckboxesLocators = [

"//input[@id='sunday']",
"//input[@id='monday']",
"//input[@id='tuesday']",
"//input[@id='wednesday']",



]

for(const checkbox of CheckboxesLocators){
await page.check(checkbox);

}

await page.waitForTimeout(5000);
});