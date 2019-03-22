describe('Search Page', function() {
  it('Ensures search works', function() {
    cy.visit("http://localhost:9099/")
    cy.get('.datatable').find('tr').its('length').should('eq', 4)
    cy.get('.datatable').find('tr').its('length').should('be.gte', 4)
  })
})