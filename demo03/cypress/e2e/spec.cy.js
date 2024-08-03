describe("Buy coffee", () => {
  it("Buy one Cappuccino = 19.00$", () => {
    cy.visit("https://coffee-cart-steel.vercel.app/");
    cy.get('[data-test="Cappuccino"]').click();
    cy.get(":nth-child(2) > a").should("have.text", "cart (1)");
    cy.get('[data-test="checkout"]')
      .should("have.text", "Total: $19.00")
      .click();
    cy.get("h1").should("have.text", "Payment details");
    cy.get("#name").type("John Doe");
    cy.get("#email").type("xxx@xxx.com");
    cy.get("#submit-payment").click();
    cy.get(".snackbar").should(
      "have.text",
      "Thanks for your purchase. Please check your email for payment."
    );
    cy.get(":nth-child(2) > a").should("have.text", "cart (0)");
    cy.get('[data-test="checkout"]').should("have.text", "Total: $0.00");
  });

  it("Buy one Cappuccino from context click = 19.00$", () => {
    cy.visit("https://coffee-cart-steel.vercel.app/");
    cy.get('[data-test="Cappuccino"]').rightclick();
    cy.get('[data-cy="add-to-cart-modal"] > p').should(
      "have.text",
      "Add Cappuccino to the cart?"
    );
    cy.get('[data-cy="add-to-cart-modal"] > form > :nth-child(1)')
      .should("have.text", "Yes")
      .click();
    cy.get(":nth-child(2) > a").should("have.text", "cart (1)");
    cy.get('[data-test="checkout"]')
      .should("have.text", "Total: $19.00")
      .click();
    cy.get("h1").should("have.text", "Payment details");
    cy.get("#name").type("John Doe");
    cy.get("#email").type("xxx@xxx.com");
    cy.get("#submit-payment").click();
    cy.get(".snackbar").should(
      "have.text",
      "Thanks for your purchase. Please check your email for payment."
    );
    cy.get(":nth-child(2) > a").should("have.text", "cart (0)");
    cy.get('[data-test="checkout"]').should("have.text", "Total: $0.00");
  });

  it("Buy 3 products to get promotion preview = 45.00$", () => {
    cy.visit("https://coffee-cart-steel.vercel.app/");
    cy.get('[data-cy="Espresso"]').click();
    cy.get('[data-cy="Espresso-Macchiato"]').click();
    cy.get('[data-cy="Cappuccino"]').click();
    cy.get(":nth-child(2) > a").should("have.text", "cart (3)");

    cy.get('.promo').should("is.visible");
    cy.get('span').should("have.text", "It's your lucky day! Get an extra cup of Mocha for $4.Cappuccino x 1Espresso x 1Espresso Macchiato x 1");
    cy.get('.yes').click();
    cy.get(":nth-child(2) > a").should("have.text", "cart (4)");

    cy.Checkout_with_username_and_email("45.00");
  });
});
