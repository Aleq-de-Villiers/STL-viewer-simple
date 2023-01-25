describe("reality checks", () => {
  it("passes", () => {
    cy.visit("http://localhost:3000/")
    // cy.get("[id=stl-view")
  })
})

describe("function checks", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/")
  })
  
  it("load nothing", () => {
    // cy.get("[id=url_input").type("")
    cy.get("[id=url_submit").click()
    cy.wait(500)
  })

  it("basic load", () => {
    cy.get("[id=url_input").type("https://storage.googleapis.com/ucloud-v3/02e14529f9df9a8ebbe03533.stl")
    cy.get("[id=url_submit").click()
    cy.wait(500)
  })
})

describe("detail checks", () => {

})