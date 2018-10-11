describe('Europe PMC Redesign - Abstract Page', function() {
  it('Visits an abstract page', function() {
    cy.visit('https://beta.europepmc.org/article/MED/29161421')
    cy.get('div.abstract').should('contain', 'Text-mined biological concepts, including database accession numbers')
  })
})