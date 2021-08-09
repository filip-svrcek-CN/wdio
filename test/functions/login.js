const loginPage = require('../selectors/loginPage');

exports.login = function login (username, password) {
    $(loginPage.inputUsername).setValue(username);
    $(loginPage.inputPassword).setValue(password);
    $(loginPage.btnSubmit).click();
}