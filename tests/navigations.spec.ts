import {test,expect} from '@playwright/test';

test('navigating to website', async({page})=>{
  await page.goto("https://www.saucedemo.com/");
  await expect(page).toHaveTitle(/Swag Labs/); 
  await page.getByPlaceholder('Username').pressSequentially("standard_user");
  await page.getByPlaceholder('Password').pressSequentially("secret_sauce");
  await page.locator("#login-button").click();
  await expect(page).toHaveURL(/inventory/);
  
})