import { test, expect } from '@playwright/test';

test("Interaction with inputs",async( {page})=>{
    await page.goto("https://www.testmuai.com/selenium-playground/simple-form-demo/");
    const messageInput= page.locator("input#user-message");
    console.log(await messageInput.getAttribute("placeholder"));
    expect(messageInput).toHaveAttribute("placeholder","Please enter your Message");
    console.log("Before entering message:"+await messageInput.inputValue());
    await messageInput.type("Hello Sabu Bhuju!!");
    console.log("After entering message:"+await messageInput.inputValue());
});


test("Sum", async ({ page }) => {
    await page.goto("https://www.testmuai.com/selenium-playground/simple-form-demo");

    const sum1input = page.locator("#sum1");
    const sum2input = page.locator("#sum2");
    const getValuesBtn = page.getByRole("button", { name: "Get Sum" });

    const num1 = 1222;
    const num2 = 122;

    await sum1input.fill(num1.toString());
    await sum2input.fill(num2.toString());

    await getValuesBtn.click();

    const result = page.locator("#addmessage");

    await expect(result).toHaveText((num1 + num2).toString());
});

test.only("Checkbox", async ({ page }) => {
    await page.goto("https://www.testmuai.com/selenium-playground/checkbox-demo/");
    const checkboxDemo = page.getByLabel("Click on check box"); 
    expect(checkboxDemo).not.toBeChecked();   
    await checkboxDemo.check();
    expect(checkboxDemo).toBeChecked();
});