class LoginPage {
  usernameInput = '//*[@data-test="username"]';
  passwordInput = '//*[@data-test="password"]';
  loginButton = '//*[@data-test="login-button"]';
  errorMessage = '//*[@data-test="error"]';

  visit() {
    cy.visit('/');
  }

  enterUsername(username) {
    cy.xpath(this.usernameInput).clear().type(username);
  }

  enterPassword(password) {
    cy.xpath(this.passwordInput).clear().type(password);
  }

  clickLogin() {
    cy.xpath(this.loginButton).click();
  }

  login(username, password) {
    this.enterUsername(username);
    this.enterPassword(password);
    this.clickLogin();
  }
  
}

export default new LoginPage();
