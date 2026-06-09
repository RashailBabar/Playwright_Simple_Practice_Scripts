const { test, expect } = require('@playwright/test');

test('Handle Frames', async ({ page }) => {



    await page.goto('https://ui.vision/demo/iframes');


//    const AllFrames =  await page.frames();
//    console.log("Number of Frames:", AllFrames.length);

//    const Frame1 = await page.frame({url:'https://www.youtube.com/embed/4aNs9BnsodA?rel=0'});

//    await Frame1.click('#icon-button player-control-play-pause-icon');
 const youtubeFrame = page.frameLocator('iframe').nth(1);

  // click Play button (stable UI-level selector)
  await youtubeFrame.getByRole('button', { name: 'Play video' }).click();
   await page.waitForTimeout(10000);




});