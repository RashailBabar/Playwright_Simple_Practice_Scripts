//const {test, expect } = require("@playwright/test");
import{test, expect} from '@playwright/test';


test('Locators', async({page})=>{
await page.goto('https://www.demoblaze.com/');


//Clicking on login button

//await page.locator('id=login2').click();
await page.click('id=login2');


//Filling the username and password
await page.type('#loginusername', 'RBA');
await page.type('#loginpassword', 'RBA@123');

//Clicking on the Login Button 
await page.click("(//button[normalize-space()='Log in'])[1]");



//verify logout button present
const LogoutButton = page.locator("//a[@id='logout2']");
await expect(LogoutButton).toBeVisible();

await page.close();


})

