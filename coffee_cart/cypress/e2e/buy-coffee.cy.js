describe('Buy coffee', () => {
  it('Buy one Cappuccino', () => {
    cy.visit('https://coffee-cart-steel.vercel.app')
    cy.get(':nth-child(3) > ul > li').should('have.length', 9)
    cy.get(':nth-child(2) > a').should('have.text', 'cart (0)')
    cy.get('[data-test="checkout"]')
      .should('be.visible')
      .should('have.text', 'Total: $0.00')
  })
})