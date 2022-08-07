/// <reference types="Cypress" />

describe('Landing Page', () => {
  before(() => {
    cy.visit('http://localhost:3030/');
  });
  it('Should test the navbar functionality for projects', () => {
    cy.get('h3').contains('Clinton Rizzo')
    cy.get('[data-rb-event-key="#projects"]').contains('Projects').click()
    cy.url().should('include', '/#projects')
  });
  it('Should test the navbar functionality for landing section', () => {
    cy.get('.menuItems')
    cy.get('h3').contains('Clinton Rizzo').click()
    cy.url().should('include', '/#resume')
    cy.get('.resume-right-col').within(() => {
      cy.get('h2').should('contain', 'Education:')
      cy.get('h2').should('contain', 'Experience:')
    });
  });
  it('Should test the navbar functionality for social links', () => {
    cy.get('#basic-nav-dropdown').click()
    cy.get('.dropdown-menu').within(() => {
      cy.get('.dropdown-item').eq(0).contains('Resume')
      cy.get('.dropdown-item').eq(1).contains('Github')
      cy.get('.dropdown-item').eq(2).contains('YouTube')
      cy.get('.dropdown-item').eq(3).contains('LinkedIn')
      cy.get('.dropdown-item').eq(4).contains('Instagram')
    });
    cy.get('#basic-nav-dropdown').click()
    cy.get('.dropdown-menu').should('not.be.visible')
  });
});