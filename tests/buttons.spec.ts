import {test,expect} from '@playwright/test';

test.describe("Interacting with button elements",()=>{

    test.beforeEach(async({page})=>{
        await page.goto("https://qaplayground.com/practice/buttons");
    })

    
    test("TC01: Verify button is clickable and triggers action",async({page})=>{
        await page.locator('[data-testid="btn-goto-home"]').isEnabled();
        await page.locator('[data-testid="btn-goto-home"]').click();
        await expect(page).toHaveURL("https://qaplayground.com/");
    });

    test("TC02: Verify button displays the correct label text",async({page})=>{
        const labeltext = await page.locator('[data-testid="btn-goto-home"]').textContent();
        await expect(labeltext).toBe("Go To Home");
    });
    
    test("TC04: Verify double-click button triggers double-click action",async({page})=>{
        await page.locator("#btn-double-click").dblclick();
        await page.locator("#btn-action-result").isVisible();
        const resultText = await page.locator("#btn-action-result").textContent();
        await expect(resultText).toContain("Double-clicked");
    });

    test("TC05: Verify right-click button triggers right-click action",async({page})=>{
        await page.locator("#btn-right-click").click({button:"right"});
        await page.locator("#btn-action-result").isVisible();
        const resultText = await page.locator("#btn-action-result").textContent();
        await expect(resultText).toContain("Right-clicked");
    });

    test("TC06: Verify button is disabled and does not trigger action",async({page})=>{
        await page.locator("#btn-disabled").isDisabled();
        await page.locator("#btn-disabled").click({force:true});
        await page.locator("#btn-action-result").isHidden();
    });

});

