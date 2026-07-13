import {test} from '@playwright/test';

test("Download Files", async ({page}) => {
    await page.goto("https://www.testmuai.com/selenium-playground/generate-file-to-download-demo");
    await page.fill("#textbox", 'Hello. This is Sabu Bhuju, This is the simple test file for practising the playeright using typescript.')

    await page.click("id=create");
    //await page.click("id=link-to-download");

    const download = await Promise.all([
        page.waitForEvent("download"),
           page.click("id=link-to-download")
    ])

    const path = await download[0].path();
    console.log(path);
});

test.only("Upload a file",async({page})=>{
    await page.goto("https://blueimp.github.io/jQuery-File-Upload/");
    // await page.setInputFiles("input[type='file']",
    // ["tests/images/avatar.jpeg", "tests/images/avatar.jpeg"]);

    const [uplaodFiles] = await Promise.all([
        page.waitForEvent("filechooser"),
        page.click("input[type='file']")
    ])

    const isMultiple = uplaodFiles.isMultiple();
    console.log(isMultiple);
    uplaodFiles.setFiles(
        ["tests/images/avatar.jpeg",
             "tests/images/avatar.jpeg"]);
});

