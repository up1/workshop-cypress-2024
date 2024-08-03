describe("Demo Login", () => {
  it("Flow 01", () => {
      cy.intercept('https://demo-backend-nodejs.vercel.app', {"message":"Hello Cypress!"})
      .as(
        'getdata'
      )
      cy.visit("https://demo-frontend-reactjs.vercel.app/");
      cy.wait('@getdata')
      cy.get('[data-testid="hello_text"]').should("contain.text", "Hello Cypress!");
  });
});
