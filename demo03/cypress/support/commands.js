// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("Checkout_with_username_and_email", (total_price) => {
  cy.get('[data-test="checkout"]')
    .should("have.text", `Total: $${total_price}`)
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

Cypress.Commands.add("getBySelector", (selector, ...args) => {
  return cy.get(`[data-cy=${selector}]`, ...args);
});
