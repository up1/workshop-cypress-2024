const login = () => {
  cy.session([], () => {
    cy.visit("http://the-internet.herokuapp.com/login");
    cy.get("input#username").clear().type("tomsmith");
    cy.get("input#password")
      .clear()
      .type("SuperSecretPassword!")
      .type("{enter}");
      cy.url().should("include", "secure");
  });
};

describe("Try use session", () => {
  it.skip("Login", () => {
    login();
    cy.url().should("include", "secure");
    cy.get("#flash").should("have.class", "success");
    cy.get("h2").should("include.text", "Secure Area");
  });

});
