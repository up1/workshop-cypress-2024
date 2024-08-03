import logins from "../fixtures/login.json";

describe("Demo Flow", () => {

  logins.forEach((login) => {

    it(login.test_case, () => {
      cy.visit("https://demo-login-workshop.vercel.app/");
      cy.get("#username_field").type(login.username);
      cy.get("#password_field").type(login.password);
    });

  });

  
});
