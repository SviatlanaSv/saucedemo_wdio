module.exports = {
    users: {
        valid: { username: 'standard_user', password: 'secret_sauce' },
        invalid: { username: 'testuser', password: 'testpassword' }
    },

    async clearInput(selector) {
        const field = await $(selector);
        await field.click();
        const value = await field.getValue();
        for (let i = 0; i < value.length; i++) {
            await browser.keys(['Backspace']);
        }
    }
};
