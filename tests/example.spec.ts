import { test, expect } from '@playwright/test';

test('basic test', async ({ page }) => {
  await page.goto('https://www.selenium.dev/');
  await expect(page).toHaveTitle(/Selenium/);
});
test('test1',async({page})=>{
    await page.goto('https://www.selenium.dev/');
    await expect(page).toHaveTitle(/Selenium/);
});
test.describe('test group',()=>{
    test('test2',async({page})=>{
        await page.goto('https://www.selenium.dev/');
        await expect(page).toHaveTitle(/Selenium/);
    });
    test('test3',async({page})=>{
        await page.goto('https://www.selenium.dev/');
        await expect(page).toHaveTitle(/Selenium/);
    })

})
