import {test} from '@playwright/test';

test('Dropdown Component Tests', async ({page}) => {
  await page.goto("https://www.testmuai.com/selenium-playground/select-dropdown-demo");
  await page.selectOption("#select-demo",{
    //label: "Friday"
    //value: "Friday"
    index: 5
  });

  await page.selectOption("#multi-select",[
    {
        label:"Texas"
    },{
        index:2
    },{
        value:"Ohio"
    }
  ])
});

test("Bootstrap Dropdown", async ({page}) => {
    await page.goto("https://www.testmuai.com/selenium-playground/jquery-dropdown-search-demo/");

    // await page.click("#country+span");
    // await page.locator("ul#select2-country-results")
    //     .locator("li",{
    //         hasText: "India"
    // }).click();

    await selectCountry("India");
    await selectCountry("Denmark");

    async function selectCountry(countryName:string){
        await page.click("#country+span");
        await page.locator("ul#select2-country-results")
            .locator("li",{
                hasText: countryName
        }).click();
    }
});