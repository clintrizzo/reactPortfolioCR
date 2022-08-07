/// <reference types="Cypress" />

describe('Landing Page', () => {
  before(() => {
    cy.visit('http://localhost:3030/');
  });
});