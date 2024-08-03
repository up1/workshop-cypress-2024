import CoffeeCartPage from './CoffeeCartPage';

describe("Coffee Cart", () => {
  const coffeeCartPage = new CoffeeCartPage();

  it("Buy one Cappuccino = 19.00$", () => {
    coffeeCartPage.visit();
    coffeeCartPage.selectCappuccino();
    coffeeCartPage.verifyCartItemCount(1);
    coffeeCartPage.verifyTotalAmount("19.00");
    coffeeCartPage.proceedToCheckout();
    coffeeCartPage.verifyPaymentDetailsPage();
    coffeeCartPage.enterPaymentDetails("John Doe", "xxx@xxx.com");
    coffeeCartPage.submitPayment();
    coffeeCartPage.verifyPurchaseMessage();
    coffeeCartPage.verifyCartItemCount(0);
    coffeeCartPage.verifyTotalAmount("0.00");
  });
});