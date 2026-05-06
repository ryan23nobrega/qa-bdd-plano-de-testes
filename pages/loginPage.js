class LoginPage {

    constructor(page) {

        this.page = page;

        this.usernameInput = page.locator('[data-test="username"]');
        this.passwordInput = page.locator('[data-test="password"]');
        this.loginButton = page.locator('[data-test="login-button"]');
        this.errorMessage = page.locator('[data-test="error"]');

    }

    async acessarSite() {

        await this.page.goto('https://www.saucedemo.com/');

    }

    async realizarLogin(usuario, senha) {

        await this.usernameInput.fill(usuario);
        await this.passwordInput.fill(senha);

        await this.loginButton.click();

    }

}

module.exports = LoginPage;