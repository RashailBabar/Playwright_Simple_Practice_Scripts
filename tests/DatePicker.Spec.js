const{test, expect} = require('@playwright/test');

test('Date Picker', async ({ page }) => {
await page.goto('https://testautomationpractice.blogspot.com/')

//await page.fill('#datepicker', '06/06/2024');

//Date Picker
const year = '2027';
const month = 'June';
const date = '15';

await page.click('#datepicker'); //Opens the date picker


while (true) {
    const CurrentYear = await page.locator('.ui-datepicker-year').textContent();

    const CurrentMonth = await page.locator('.ui-datepicker-month').textContent();

if(CurrentYear === year && CurrentMonth === month){

    break;
}
await page.click('.ui-datepicker-next');

}
// const dateElements = await page.$$(`//a[@class='ui-state-default']`);


// for(const dateElement of dateElements){


//     if(await dateElement.textContent() == date){

//     await dateElement.click();
//     break;

// }

// }
//Another way to select the date
await page.click(`//a[@class='ui-state-default' and text()='${date}']`);


await page.waitForTimeout(8000);
    
})