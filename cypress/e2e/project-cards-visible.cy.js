/// <reference types="Cypress" />

describe('Project Section', () => {
  before(() => {
    cy.visit('http://localhost:3030/');
  });
  describe('Should test javascript cards visibility', () => {
    it('Should display project cards for JavaScript', () => {
      cy.get('[data-rb-event-key="#projects"]').contains('Projects').click()
      cy.get('.content').within(() => {
        cy.get('.codingProjects').within(() => {
          cy.get('.card').eq(0).should('contain', 'Calendar Planner')
          cy.get('.card').eq(1).should('contain', 'Brick Breaker')
          cy.get('.card').eq(2).should('contain', 'Weather Board')
        }); 
      });
    });
  });

  describe('Should test node cards visibility', () => {
    it('Should display project cards for Node JS', () => {
      cy.get('.menuItems').contains('NodeJS').click()
      cy.get('[data-rb-event-key="#projects"]').contains('Projects').click()
      cy.get('.content').within(() => {
        cy.get('.codingProjects').within(() => {
          cy.get('.card').eq(0).should('contain', 'Employee Tracker')
          cy.get('.card').eq(1).should('contain', 'Readme Generator')
          cy.get('.card').eq(2).should('contain', 'Team Profile')
        }); 
      });
    });
  });

  describe('Should test react cards visibility', () => {
    it('Should display project cards for React', () => {
      cy.get('.menuItems').contains('React').click()
      cy.get('[data-rb-event-key="#projects"]').contains('Projects').click()
      cy.get('.content').within(() => {
        cy.get('.codingProjects').within(() => {
          cy.get('.card').eq(0).should('contain', 'React Chat Box')
          cy.get('.card').eq(1).should('contain', 'React Book Search')
          cy.get('.card').eq(2).should('contain', 'React User Directory')
        }); 
      });
    });
  });
});
