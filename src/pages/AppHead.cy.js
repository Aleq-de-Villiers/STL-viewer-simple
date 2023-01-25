import React from 'react'
import { AppHead } from './AppHead'

describe('<AppHead />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<AppHead />)
    cy.get("[id=test_head]").should("have.text", "STL viewer simple")
    cy.get("[id=url_input]").type("this test text")
    cy.get("[id=url_submit]")
  })
})