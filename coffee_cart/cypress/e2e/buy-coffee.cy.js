describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://coffee-cart-steel.vercel.app')
    cy.get(':nth-child(2) > a').should('have.text', 'cart (0)')
    cy.get('[data-test="checkout"]')
      .should('be.visible')
      .should('have.text', 'Total: $0.00')
  })
})