import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";

Given("I open login page", () => {
    cy.visit("https://demo-login-workshop.vercel.app");
});

When("Login with username and password", () => {
    cy.get("#username_field").should("be.visible").type("demo");
    cy.get("#password_field").should("be.visible").type("mode");
    cy.get("#login_button").should("be.visible").click();
});

Then("show welcome page", () => {
    cy.contains("Login succeeded. Now you can logout.").should("be.visible");

    cy.get("#container > h1").contains("Welcome Page").should("be.visible");
    cy.get("#container > p")
      .contains("Login succeeded. Now you can logout.")
      .should("be.visible");
});
