import { test, expect } from '@playwright/test';

test('login test', async ({ page }) => {

  //  test.setTimeout(60000); // increase timeout
  await page.goto("https://www.saucedemo.com/");

  await expect(page).toHaveTitle(/Swag Labs/);

  await page.getByPlaceholder('Username').fill("standard_user");
  await page.getByPlaceholder('Password').fill("secret_sauce");

  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page).toHaveURL(/inventory/);
  await expect(page.locator('.inventory_list')).toBeVisible();
});