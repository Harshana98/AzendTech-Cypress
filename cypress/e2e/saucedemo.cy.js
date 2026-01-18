import LoginPage from '../support/pageObjects/LoginPage';
import InventoryPage from '../support/pageObjects/InventoryPage';

describe('Saucedemo Login and Add to Cart', () => {
  before(() => {
    cy.fixture('credentials.example.json').as('credentials');
  });

  it('Should login and add the first item to cart', function () {
    LoginPage.visit();
    cy.url().should('include', 'saucedemo.com');

    LoginPage.login(this.credentials.username, this.credentials.password);

    cy.url().should('include', 'inventory.html');
    cy.get('.inventory_list').should('be.visible');

    InventoryPage.addFirstItemToCart();
    InventoryPage.assertCartCount(1);
  });
});
