/// <reference types="Cypress" />

describe('Landing Page', () => {
  before(() => {
    cy.visit('http://localhost:3030/');
  });
  it('Should load page and display heading', () => {
    cy.get('.banner-text').find('h1').should('contain', 'Clinton Rizzo')
  })
});