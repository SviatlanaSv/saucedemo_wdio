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
        //I delete the input content manually (using 'for' loop), because cleanValue() or setValue() does not always work for Micr.Edge.
        for (let i = 0; i < value.length; i++) {
            await browser.keys(['Backspace']);
        }
    } 

    async getValue() {
        return await $(this.selector).getValue();
    }
};

module.exports = LoginFieldComponent;
