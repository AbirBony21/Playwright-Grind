const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/login');

test('login test pom', async ({ page }) => {

    const Login = new LoginPage(page)

    await Login.gotoLoginPage()
    await Login.login('tomsmith', 'SuperSecretPassword!')

    // await page.goto('https://the-internet.herokuapp.com/login');
    // await page.getByRole('textbox', { name: 'Username' }).fill('tomsmith');
    // await page.getByRole('textbox', { name: 'Password' }).fill('SuperSecretPassword!');
    // await page.getByRole('button', { name: ' Login' }).click();

});