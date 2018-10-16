const BASE_URL = Cypress.env('BASE_URL')

describe('Search Page', function() {
  it('Ensures search works', function() {
    cy.visit(BASE_URL)
    cy.get('input[name="searchString"]').type('Yuci Gou')
    cy.get('button[type="submit"]').click()
	  cy.get('div.author-affiliation').should('contain', 'European Bioinformatics Institute')
  })
})