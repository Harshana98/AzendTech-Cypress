Install Dependencies:
npm install

Update Example Credintials File:
Open the credentials file then edit with your credentials

Test Flow:
Visit the saucedemo login page
Log in with externalized credentials
Add the first inventory item to the cart
Assert the cart badge shows 1

Page Object Model:
LoginPage.js
Methods:
visit() - Navigate to the login page
enterUsername(username) - Enter username
enterPassword(password) - Enter password
clickLogin() - Click the login button
login(username, password) - Complete login flow

InventoryPage.js
Methods:
addFirstItemToCart() - Add the first product to the cart
assertCartCount(expected) - Verify the cart badge count
goToCart() - Navigate to the shopping cart
getCartBadgeText() - Get the current cart badge text

Running Tests:
npm run cypress:open
npm run cypress:run
npm run cypress:run -- --spec "cypress/e2e/saucedemo.cy.js"
