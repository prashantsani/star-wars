describe('Navigation', () => {
  it('should navigate to the characters page', () => {
    // Start from the index page
    cy.visit('http://localhost:3000/')
 
    // Find a link with an href attribute containing "characters" and click it
    cy.get('nav a[href*="characters"]').click()
 
    // The new url should include "/characters"
    cy.url().should('include', '/characters')
 
    // The new page should contain an h1 with "Characters"
    cy.get('main h1').contains('Characters')
  })

  it('should navigate to the favorites page', () => {
    // Start from the index page
    cy.visit('http://localhost:3000/')
 
    // Find a link with an href attribute containing "favorites" and click it
    cy.get('nav a[href*="favorites"]').click()
 
    // The new url should include "/favorites"
    cy.url().should('include', '/favorites')
 
    // The new page should contain an h1 with "About"
    cy.get('main h1').contains('Favorites')
  })
})