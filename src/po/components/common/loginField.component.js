class LoginFieldComponent {
    constructor(selector) {
        this.selector = selector;
    }

    async setValue(value) {
        const field = await $(this.selector);
        await field.setValue(value);
    }

    async clearValue() {
        const field = await $(this.selector);
        await field.click();
        const value = await field.getValue();
        for (let i = 0; i < value.length; i++) {
            await browser.keys(['Backspace']);
        }
    } 

    async getValue() {
        return await $(this.selector).getValue();
    }
};

module.exports = LoginFieldComponent;
