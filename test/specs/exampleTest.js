const assert = require('assert');
const LoginPage = require('../selectors/loginPage');
const SecurePage = require('../selectors/securePage');
const {login} = require('../functions/login.js');

describe('My Login application', () => {
    it('should login with valid credentials', () => {
        browser.url('/login');
        login('tomsmith', 'SuperSecretPassword!');
        assert.strictEqual($(SecurePage.flashAlert).isExisting(), true, `Flash alert is not existing`);
        assert.strictEqual($(SecurePage.flashAlert).getText().includes('You logged into a secure area!'), true,
        `Flash alert should show text 'You logged into a secure area!' but actual text is ${$(SecurePage.flashAlert).getText()}`);
    });
});


