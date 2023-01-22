describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/')
    cy.get("[id=test_head]").invoke("text").should("eq" ,"this is a test")
  })
})