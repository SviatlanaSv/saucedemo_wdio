const LoginPage = require ('./../po/pages/login.page.js');
const {users} = require('../utils/dataProvider.js');

const loginPage = new LoginPage();

describe('Login functionality', () => {
    beforeEach(async () => {
        await loginPage.open();
    });

    it('UC-1: should show error if fields are empty', async () => {

        await loginPage.username.setValue(users.invalid.username);
        await loginPage.password.setValue(users.invalid.password);

        await loginPage.username.clearValue();
        await loginPage.password.clearValue();

        console.log('Username field after clear should be empty:', await loginPage.username.getValue());
        console.log('Password field after clear should be empty:', await loginPage.password.getValue());

        await loginPage.loginBtn.click();
    
        await expect(loginPage.errorMsg).toBeDisplayed();
        await expect(loginPage.errorMsg).toHaveText(expect.stringContaining('Username is required'));
    });


    it('UC-2: should show error if password is missing (valid user)', async () => {
        await $('#user-name').setValue(users.valid.username);
        await $('#password').setValue(users.valid.password);

        // await clearInput('#password');
        await loginPage.password.clearValue();

        console.log('Password field after manual backspace should be empty:', await $('#password').getValue());

        await $('#login-button').click();

        await expect($('h3[data-test="error"]')).toBeDisplayed();
        await expect($('h3[data-test="error"]')).toHaveText(
            expect.stringContaining('Password is required')
        );
    });

    it('UC-3: should log in with valid username and password and see "Swag Labs"', async () => {
        await $('#user-name').setValue(users.valid.username);
        await $('#password').setValue(users.valid.password);
        await $('#login-button').click();

        await expect($('.app_logo')).toBeDisplayed();
        await expect($('.app_logo')).toHaveText('Swag Labs');
    });
});
