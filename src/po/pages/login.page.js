const LoginFieldComponent = require('../components/common/loginField.component');

class LoginPage{
    constructor() {
        this.username = new LoginFieldComponent('#user-name');
        this.password = new LoginFieldComponent('#password');
    }

    get loginBtn() {
        return $('#login-button');
    }

    get errorMsg() {
        return $('h3[data-test="error"]');
    }

    get logo() {
        return $('.app_logo');
    }

    async open(){
        await browser.url('https://www.saucedemo.com/');
    }
};

module.exports = LoginPage;