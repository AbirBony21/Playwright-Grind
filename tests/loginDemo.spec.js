const { test, expect } = require("@playwright/test")

test('Demo Login Test 1 - Applitools Demo', async ({ page }) => {

    await page.goto('https://demo.applitools.com/')
    // await page.pause()
    await page.getByRole('textbox', { name: 'Enter your username' }).fill('AbirBony21')
    await page.getByRole('textbox', { name: 'Enter your password' }).fill('123456')

    await page.waitForSelector('text=Sign in', { timeout: 5000 })
    await page.getByRole('link', { name: 'Sign in' }).click()
});

test.skip('Demo Login Test 2 - Orange HRM Demo', async ({ page }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    // await page.pause()

    await page.getByRole('textbox', { name: 'Username' }).click();
    await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.getByText('Fl ttt').click();
    await page.getByRole('menuitem', { name: 'Logout' }).click();

});

test('Demo Login Test 3 - Admin-Demo-NopCommerce', async ({ page }) => {

    // await page.pause()
    await page.goto('https://admin-demo.nopcommerce.com/login')
    await page.getByRole('textbox', { name: 'Email:' }).click()
    await page.getByRole('textbox', { name: 'Email:' }).press('ControlOrMeta+a')
    await page.getByRole('textbox', { name: 'Email:' }).press('ControlOrMeta+c')
    await page.getByRole('textbox', { name: 'Email:' }).fill('admin@yourstore.com')
    await page.getByRole('textbox', { name: 'Password:' }).click()
    await page.getByRole('textbox', { name: 'Password:' }).fill('admin')
    await page.getByRole('button', { name: 'Log in' }).click()
    await page.getByRole('link', { name: 'Logout' }).click()

    await page.close()
});