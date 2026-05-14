import {test,expect} from "@playwright/test";

test.describe(()=>{
    test("Visiting the Home page",async ({page})=>{
        await page.goto("https://automationexercise.com/");
        await expect(page).toHaveURL(/automationexercise/);
        
        //Clicking login button through the text
        await page.getByText("Login").click();
        //await page.getByRole("link",{name:"Login"}).click();
        await expect(page).toHaveURL(/login/);  

        //Clicking button to signup 
        const name = "Aditya";
        const email = "aditya23@gmail.com";
        const password = "Aditya@123";
        await page.getByPlaceholder("Name").fill(name);
        await page.locator("[data-qa='signup-email']").fill(email);
        await page.locator("[data-qa='signup-button']").click();

        //verify signup page
        await expect(page).toHaveURL(/signup/);
        //clicking the radio button
        await page.locator("#id_gender1").check();
        await expect(page.locator("[data-qa='name']")).toHaveValue(name);
        await expect(page.locator("[data-qa='email']")).toHaveValue(email);
        await expect(page.locator("[data-qa='email']")).toBeDisabled();
        await page.locator("[data-qa='password']").fill(password);
        await page.locator("[data-qa='days']").selectOption("10");
        await page.locator("[data-qa='months']").selectOption("4");
        await page.locator("[data-qa='years']").selectOption("2000");
        await page.locator("#newsletter").check();
        await page.locator("#optin").check();
        await page.locator("[data-qa='first_name']").fill("Aditya");
        await page.locator("[data-qa='last_name']").fill("Kumar");
        await page.locator("[data-qa='company']").fill("Google");
        await page.locator("[data-qa='address1']").fill("No.10, Sajinbin Street, Chennai - 600008, TamilNadu");
        await page.locator("[data-qa='address2']").fill("No.10, Sajinbin Street, Chennai - 600008, TamilNadu");
        await page.locator("[data-qa='country']").selectOption("India");
        await page.locator("[data-qa='state']").fill("TamilNadu");
        await page.locator("[data-qa='city']").fill("Chennai");
        await page.locator("[data-qa='zipcode']").fill("600008");
        await page.locator("[data-qa='mobile_number']").fill("8787879067");
        await page.locator("[data-qa='create-account']").click();
        

    })
})