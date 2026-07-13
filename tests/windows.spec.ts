import { test } from '@playwright/test';

test("Interact with multiple tabs", async ({ page }) => {
    await page.goto("https://www.testmuai.com/selenium-playground/window-popup-modal-demo");

    console.log("Parent URL:", page.url());

    // Opens both Facebook and Twitter/X tabs
    await page.locator("#followboth").click();

    // Wait for the tabs to open
    await page.waitForTimeout(2000);

    const pages = page.context().pages();
    console.log("No. of tabs: " + pages.length);

    for (const p of pages) {
        await p.waitForLoadState();
        console.log(p.url());
    }

    // ==========================
    // Single popup example
    // ==========================

    await page.goto("https://www.testmuai.com/selenium-playground/window-popup-modal-demo");

    const [newWindow] = await Promise.all([
        page.waitForEvent("popup"),
        page.getByRole("link", { name: "Follow On Twitter" }).click()
    ]);

    await newWindow.waitForLoadState();
    console.log("Twitter URL:", newWindow.url());
});