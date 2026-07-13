import {test, expect} from "@playwright/test";

test('Frames Interaction', async ({page}) => {
    await page.goto("https://letcode.in/frame");
    const allframes = page.frames();
    console.log("No. of frames:" + allframes.length);

    const frame = page.frameLocator("#firstFr");
    await frame.locator("input[name='fname']").fill("Sabu");
    await frame.locator("input[name='lname']").fill("Bhuju");

    const innerFrame =frame.frameLocator("iframe[src='/innerframe']");
    await innerFrame.locator("input[name='email']").fill("sabu@mail.com");


    // const myFrame = page.frame("firstFr");
    // await myFrame?.fill("input[name='fname']", "Sabu");
    // await myFrame?.fill("input[name='lname']", "Bhuju");

    // expect(await myFrame?.locator("p.has-text-info").textContent()).toContain("You have entered Sabu Bhuju");




});
