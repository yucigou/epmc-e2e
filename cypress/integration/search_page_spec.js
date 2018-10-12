describe('Search Page', function() {
  it('Ensures search works', function() {
    cy.visit('https://beta.europepmc.org/')
    cy.get('input[name="searchString"]').type('Yuci Gou')
    cy.get('button[type="submit"]').click()
	  cy.get('div.author-affiliation').should('contain', 'European Bioinformatics Institute')
  })
})