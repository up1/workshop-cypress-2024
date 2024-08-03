describe("Demo Login", () => {
  it("Flow 01", () => {
    cy.visit("https://demo-login-workshop.vercel.app/");

    // Check if the login page is visible
    cy.get("#login_header").should("be.visible");
    cy.get("#login_header").should("contain.text", "Login Page");

    // Fillin the form
    cy.get("#username_field").type("demo");
    cy.get("#password_field").type("mode");

    // Login
    cy.get("#login_button").click();

    // Check welcome message
    cy.get('[data-test="page_name"]').should("be.visible");
    cy.get('[data-test="page_name"]').should("contain.text", "Welcome Page");
    cy.get('[data-test="result"]').should(
      "contain.text",
      "Login succeeded. Now you can logout."
    );
    cy.get('[data-test="result"] a').should("have.attr", "href", ".");
  });
});
