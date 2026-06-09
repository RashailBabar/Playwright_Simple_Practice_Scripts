const { test, expect } = require('@playwright/test');


  test('should continue after multiple assertion failures', async ({ page }) => {
    await page.goto('https://www.demoblaze.com/');

    // Soft assertions collect failures and continue execution
    expect.soft(await page.title()).toBe('Example Domain');
    expect.soft(await page.locator('h1').textContent()).toBe('Example Domain');
    expect.soft(await page.locator('p').textContent()).toContain('illustrative examples');

    // This page does not have a button, but the test will continue and report all failures together
    expect.soft(await page.locator('button').count()).toBe(1);

    // You can still use regular assertions when you need an immediate stop
    expect(await page.locator('h1')).toBeVisible();
  });

