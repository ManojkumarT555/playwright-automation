import {test,expect} from '@playwright/test';

test("Automating the Forms", async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");

    await expect(page).toHaveURL(/testautomationpractice/);

    await page.getByPlaceholder("Enter Name").fill("John");
    await page.getByPlaceholder("Enter EMail").fill("JohnDoe12@gmail.com");
    await page.getByPlaceholder("Enter Phone").fill("8787879067");
    
    await page.locator("#textarea").fill("No.10, Sajinbin Street, Chennai - 600008, TamilNadu");

    //Checking the radio buttons
    await expect(page.getByText("Gender:")).toBeVisible();
    await page.locator("#male").check();
    await expect(page.locator("#male")).toBeChecked();

    //Checking the Checkboxes
    // await expect(page.getByText("Days:")).toBeVisible();
    // await page.locator("[]").check();


})