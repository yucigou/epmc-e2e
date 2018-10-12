describe('Europe PMC redesign - Search', function() {
  it('Visits the home page and search', function() {
    cy.visit('https://beta.europepmc.org/')
    cy.get('input[name="searchString"]').type('Yuci Gou')
    cy.get('button[type="submit"]').click()
	  cy.get('div.author-affiliation').should('contain', 'European Bioinformatics Institute')
  })
})