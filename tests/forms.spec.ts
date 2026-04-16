import {test,expect} from '@playwright/test';

test("Automating the Forms", async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");

    await expect(page).toHaveURL(/testautomationpractice/);

    await page.getByPlaceholder("Enter Name").fill("John");
    await page.getByPlaceholder("Enter EMail").fill("JohnDoe12@gmail.com");
    await page.getByPlaceholder("Enter Phone").fill("8787879067");
    
    await page.locator("#textarea").fill("No.10, Sajinbin Street, Chennai - 600008, TamilNadu");

})

test("Radio and Checkboxes",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");

    await expect(page).toHaveURL(/testautomationpractice/);
    //Checking the radio buttons
    await expect(page.getByText("Gender:")).toBeVisible();
    await page.locator("#male").check();
    await expect(page.locator("#male")).toBeChecked();

    //Checking the Checkboxes
    const days=["#monday","#tuesday","#wednesday","#thursday","#friday"];
    for (const day of days){
        await page.locator(day).check();
    }
})

test("Dropdown and dynamic dropdowns",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");

    await expect(page).toHaveURL(/testautomationpractice/);
    //Handling dropdowns
    await expect(page.getByText("Country:")).toBeVisible();
    await page.locator("#country").selectOption("india");

    await expect(page.getByText("Colors:")).toBeVisible();
    await page.locator("#colors").selectOption(["red","blue","green"]);
})


test("Handling dates", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  await expect(page).toHaveURL(/testautomationpractice/);
  // ✅ Datepicker 1 
  await page.locator("#datepicker").fill('04/20/2026');
  // ✅ Datepicker 2 
  await page.locator("#txtDate").click();
  await page.locator(".ui-datepicker-month").selectOption({ label: "Apr" });
  await page.locator(".ui-datepicker-year").selectOption("2026");
  await page.locator("//a[text()='20']").click();
  // Datepicker 3
//   await page.locator('#start-date').click();
//   await page.locator('.ui-datepicker-month').selectOption('Aug');
//   await page.locator('.ui-datepicker-year').selectOption('2025');
//   await page.locator("//a[text()='15']").click();
});


test("Handling Uploading Files",async({page})=>{

    //"C:\Users\manoj\Downloads\customers.csv"
    await page.goto("https://testautomationpractice.blogspot.com/#");

    await expect(page).toHaveURL(/testautomationpractice/);
    await page.setInputFiles("#singleFileInput","/README.md");

})
