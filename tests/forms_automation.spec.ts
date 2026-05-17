import {test,expect} from "@playwright/test";

test.describe("Automating form interactions",()=>{  
    
    test.beforeEach(async({page})=>{
        await page.goto("https://qaplayground.com/practice/forms");
        await expect(page).toHaveURL(/forms/);
        await expect(page.getByRole('heading', { name: 'Form Automation Practice' })).toBeVisible();
    });

    test("TC01: Fill all fields with valid data and submit successfully",async({page})=>{
        await page.locator("#firstName").fill("John");
        await page.locator("#lastName").fill("Doe");
        await page.locator("#email").fill("john@example.com");
        await page.locator("#phone").fill("9876543210");
        await page.locator('#dob').fill('2000-05-01');


        //radio button
        await page.locator('#gender-male').check();
        await expect(page.locator('#gender-male')).toBeChecked();
        //checkbox
        await page.locator("#country").click();
        await page.getByRole('option', { name: 'India' }).click();

        await page.locator("#city").fill("Mumbai");
        await page.locator('#password').fill("pass123");
        await page.locator('#confirmPassword').fill("pass123");

        await page.getByLabel('I agree to the Terms & Conditions').check();
        await page.locator("#submitFormBtn").click();

        await expect(page.locator("#formSuccessMsg")).toBeVisible();
    });

});