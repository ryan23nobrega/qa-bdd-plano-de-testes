const { test, expect } = require('@playwright/test');
const LoginPage = require('../../pages/loginPage');

test.describe('Login SauceDemo', () => {

    test('Deve exibir erro ao tentar login com usuário bloqueado', async ({ page }) => {

        const loginPage = new LoginPage(page);

        await loginPage.acessarSite();

        await loginPage.realizarLogin(
            'locked_out_user',
            'secret_sauce'
        );

        await expect(loginPage.errorMessage)
            .toContainText(
                'Sorry, this user has been locked out.'
            );

    });

});