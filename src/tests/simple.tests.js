const { users, clearInput } = require('../utils/dataProvider.js');

describe('Login functionality', () => {
    beforeEach(async () => {
        await browser.url('https://www.saucedemo.com/');
    });

    it('UC-1: should show error if fields are empty', async () => {
        await $('#user-name').setValue(users.invalid.username);
        await $('#password').setValue(users.invalid.password);

        await clearInput('#user-name');
        await clearInput('#password');

        console.log('Username field after manual backspace should be empty:', await $('#user-name').getValue());
        console.log('Password field after manual backspace should be empty:', await $('#password').getValue());

        await $('#login-button').click();

        await expect($('h3[data-test="error"]')).toBeDisplayed();
        await expect($('h3[data-test="error"]')).toHaveText(
            expect.stringContaining('Username is required')
        );
    });

    it('UC-2: should show error if password is missing (valid user)', async () => {
        await $('#user-name').setValue(users.valid.username);
        await $('#password').setValue(users.valid.password);

        await clearInput('#password');

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
