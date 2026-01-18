class InventoryPage {
  firstInventoryItem = '(//div[@class="inventory_item"])[1]';
  firstAddToCartButton = '(//div[@class="inventory_item"]//button[contains(@data-test, "add-to-cart")])[1]';
  cartBadge = '//span[@class="shopping_cart_badge"]';
  cartLink = '//a[@class="shopping_cart_link"]';

  addFirstItemToCart() {
    cy.xpath(this.firstAddToCartButton).click();
  }

  assertCartCount(expected) {
    cy.xpath(this.cartBadge).should('have.text', expected.toString());
  }

  getCartBadgeText() {
    return cy.xpath(this.cartBadge).invoke('text');
  }

  goToCart() {
    cy.xpath(this.cartLink).click();
  }
}

export default new InventoryPage();
