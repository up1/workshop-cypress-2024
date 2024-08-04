const verifyFirstPage = () => {
  cy.get('[data-test="coffee-list"] > li').should('have.length', 9)
    cy.get(':nth-child(2) > a').should('have.text', 'cart (0)')
    cy.get(':nth-child(2) > a').should('have.attr', 'href', '/cart')
    cy.get('[data-test="checkout"]')
      .should('be.visible')
      .should('have.text', 'Total: $0.00')
}

const addProductToCart = (name, price) => {
  cy.get(`[data-cy="${name}"]`).click()
  cy.get(':nth-child(2) > a').should('have.text', 'cart (1)')
  cy.get('[data-test="checkout"]')
    .should('have.text', 'Total: $'+ price)
}


describe('Buy coffee', () => {

  it('Mouse over element', () => {
    cy.visit('https://coffee-cart-steel.vercel.app')
    cy.get('[data-cy="Cappuccino"]').click()
    cy.get('[data-test="checkout"]').trigger('mouseover')
  })

  it.only('Buy one Cappuccino', () => {
    cy.visit('https://coffee-cart-steel.vercel.app')
    verifyFirstPage()
    
    // Add Cappuccino to cart
    addProductToCart('Cappuccino', '19.00')
    
    // Pay for the coffee
    cy.get('[data-test="checkout"]').click()
    cy.get('.modal-content').should('be.visible')
    cy.get('h1').should('have.text', 'Payment details')

    // Fill in payment details
    cy.get('#name').type('Somkiat')
    cy.get('#email').type('somkiat@xxx.com')

    // Pay with success
    cy.get('#submit-payment').click()
    cy.get('.snackbar').should('have.text', 'Thanks for your purchase. Please check your email for payment.')
    cy.get(':nth-child(2) > a').should('have.text', 'cart (0)')
    cy.get('[data-test="checkout"]')
      .should('have.text', 'Total: $0.00')

  })
})