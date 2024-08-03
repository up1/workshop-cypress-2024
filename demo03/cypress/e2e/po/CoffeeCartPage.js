class CoffeeCartPage {
    visit() {
      cy.visit("https://coffee-cart-steel.vercel.app/");
    }
  
    selectCappuccino() {
      cy.get('[data-test="Cappuccino"]').click();
    }
  
    verifyCartItemCount(count) {
      cy.get(":nth-child(2) > a").should("have.text", `cart (${count})`);
    }
  
    verifyTotalAmount(amount) {
      cy.get('[data-test="checkout"]').should("have.text", `Total: $${amount}`);
    }
  
    proceedToCheckout() {
      cy.get('[data-test="checkout"]').click();
    }
  
    verifyPaymentDetailsPage() {
      cy.get("h1").should("have.text", "Payment details");
    }
  
    enterPaymentDetails(name, email) {
      cy.get("#name").type(name);
      cy.get("#email").type(email);
    }
  
    submitPayment() {
      cy.get("#submit-payment").click();
    }
  
    verifyPurchaseMessage() {
      cy.get(".snackbar").should(
        "have.text",
        "Thanks for your purchase. Please check your email for payment."
      );
    }
  }
  
  export default CoffeeCartPage;