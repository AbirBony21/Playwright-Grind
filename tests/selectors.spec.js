const { test, expect } = require("@playwright/test")

test('Selectors Demo',  async ({ page }) => {
    await page.goto('https://www.saucedemo.com/')
    await page.pause()

    //using any object property
    await page.click('id=user-name')
    await page.locator('id=user-name').fill('standard_user')
    await page.locator('[id="user-name"]').fill('lockedout_user')

    //using CSS selector
    // #login-button
    await page.locator('#login-button').click()

    // using Xpath
    await page.locator('xpath=//input[@name="password"]').fill('12345678')
    await page.locator('//input[@id="user-name"]').fill('Reigen')
    await page.locator('//input[@name="password"]').fill('Reigen')

    // using Text
    await page.locator('text=LOGIN').click()
    await page.locator('input:has-text("LOGIN")').click()
});