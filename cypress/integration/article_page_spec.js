describe('Article Page', function() {
  it('Ensures abstract is loaded', function() {
    cy.visit('https://beta.europepmc.org/article/MED/29161421')
    cy.get('div.abstract').should('contain', 'Text-mined biological concepts, including database accession numbers')
  })

  it('Ensures full text is loaded', function() {
    cy.visit('https://beta.europepmc.org/article/MED/29161421')
    cy.get('a[href="#free-full-text"]').click()
    cy.get('div#fulltextcontent').should('contain', 'The content scope of Europe PMC covers both abstracts and full text articles.')
  })
})