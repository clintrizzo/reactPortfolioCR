/// <reference types="Cypress" />

describe('Project Page - project cards functionality', () => {
  before(() => {
    cy.visit('http://localhost:3030/');
  });
  
  describe('Should test project cards for javascript', () => {
    it('Should test calendar planner card', () => {
      cy.get('[data-rb-event-key="#projects"]').contains('Projects').click()
      cy.get('.content').within(() => {
        cy.get('.codingProjects').within(() => {
          cy.get('.card').eq(0).should('contain', 'Calendar Planner').within(() => {
            cy.get('#photoCalendar').trigger('mouseover')
            cy.get('.dropdown').contains('Click For More Details').click()
            cy.get('.dropdown').contains('Click To Collapse').should('be.visible')
            cy.get('.description').should('be.visible')
            cy.get('#photoCalendar').should('not.be.visible')
            cy.get('.collapsible-card').within(() => {
              cy.get('.dropdown').contains('Click To Collapse').click()
              cy.get('.description').should('not.be.visible')
              cy.get('.dropdown').contains('Click For More Details').should('be.visible')
            });
          });
        });
      });
    });
    it('Should test brick breaker card', () => {
      cy.get('.card').eq(1).should('contain', 'Brick Breaker').within(() => {
        cy.get('#brickBreaker').trigger('mouseover')
        cy.get('.dropdown').contains('Click For More Details').click()
        cy.get('.dropdown').contains('Click To Collapse').should('be.visible')
        cy.get('.description').should('be.visible')
        cy.get('#brickBreaker').should('not.be.visible')
        cy.get('.collapsible-card').within(() => {
          cy.get('.dropdown').contains('Click To Collapse').click()
          cy.get('.description').should('not.be.visible')
          cy.get('.dropdown').contains('Click For More Details').should('be.visible')
        });
      });
    });
    it('Should test weatherboard card', () => {
      cy.get('.card').eq(2).should('contain', 'Weather Board').within(() => {
        cy.get('#weather').trigger('mouseover')
        cy.get('.dropdown').contains('Click For More Details').click()
        cy.get('.dropdown').contains('Click To Collapse').should('be.visible')
        cy.get('.description').should('be.visible')
        cy.get('#weather').should('not.be.visible')
        cy.get('.collapsible-card').within(() => {
          cy.get('.dropdown').contains('Click To Collapse').click()
          cy.get('.description').should('not.be.visible')
          cy.get('.dropdown').contains('Click For More Details').should('be.visible')
        });
      }); 
    });
  });

  describe('Should test project cards for nodejs', () => {
    it('Should test employee tracker card', () => {
      cy.get('.menuItems').contains('NodeJS').click()
      cy.get('.content').within(() => {
        cy.get('.codingProjects').within(() => {
          cy.get('.card').eq(0).should('contain', 'Employee Tracker').within(() => {
            cy.get('#employeeTracker').trigger('mouseover')
            cy.get('.dropdown').contains('Click For More Details').click()
            cy.get('.dropdown').contains('Click To Collapse').should('be.visible')
            cy.get('.description').should('be.visible')
            cy.get('#employeeTracker').should('not.be.visible')
            cy.get('.collapsible-card').within(() => {
              cy.get('.dropdown').contains('Click To Collapse').click()
              cy.get('.description').should('not.be.visible')
              cy.get('.dropdown').contains('Click For More Details').should('be.visible')
            })
          });
        });
      });
    });
    it('Should test readme generator card', () => {
      cy.get('.card').eq(1).should('contain', 'Readme Generator').within(() => {
        cy.get('#readMe').trigger('mouseover')
        cy.get('.dropdown').contains('Click For More Details').click()
        cy.get('.dropdown').contains('Click To Collapse').should('be.visible')
        cy.get('.description').should('be.visible')
        cy.get('#readMe').should('not.be.visible')
        cy.get('.collapsible-card').within(() => {
          cy.get('.dropdown').contains('Click To Collapse').click()
          cy.get('.description').should('not.be.visible')
          cy.get('.dropdown').contains('Click For More Details').should('be.visible')
        });
      });
    });
    it('Should test team profile card', () => {
      cy.get('.card').eq(2).should('contain', 'Team Profile').within(() => {
        cy.get('#teamProfile').trigger('mouseover')
        cy.get('.dropdown').contains('Click For More Details').click()
        cy.get('.dropdown').contains('Click To Collapse').should('be.visible')
        cy.get('.description').should('be.visible')
        cy.get('#teamProfile').should('not.be.visible')
        cy.get('.collapsible-card').within(() => {
          cy.get('.dropdown').contains('Click To Collapse').click()
          cy.get('.description').should('not.be.visible')
          cy.get('.dropdown').contains('Click For More Details').should('be.visible')
        });
      }); 
    });
  });

  describe('Should test project cards for react', () => {
    it('Should test react chat box card', () => {
      cy.get('.menuItems').contains('React').click()
      cy.get('.content').within(() => {
        cy.get('.codingProjects').within(() => {
          cy.get('.card').eq(0).should('contain', 'React Chat Box').within(() => {
            cy.get('#chatBox').trigger('mouseover')
            cy.get('.dropdown').contains('Click For More Details').click()
            cy.get('.dropdown').contains('Click To Collapse').should('be.visible')
            cy.get('.description').should('be.visible')
            cy.get('#chatBox').should('not.be.visible')
            cy.get('.collapsible-card').within(() => {
              cy.get('.dropdown').contains('Click To Collapse').click()
              cy.get('.description').should('not.be.visible')
              cy.get('.dropdown').contains('Click For More Details').should('be.visible')
            });
          });
        });
      });
    });
    it('Should test react book search card', () => {
      cy.get('.card').eq(1).should('contain', 'React Book Search').within(() => {
        cy.get('#googleSearch').trigger('mouseover')
        cy.get('.dropdown').contains('Click For More Details').click()
        cy.get('.dropdown').contains('Click To Collapse').should('be.visible')
        cy.get('.description').should('be.visible')
        cy.get('#googleSearch').should('not.be.visible')
        cy.get('.collapsible-card').within(() => {
          cy.get('.dropdown').contains('Click To Collapse').click()
          cy.get('.description').should('not.be.visible')
          cy.get('.dropdown').contains('Click For More Details').should('be.visible')
        });
      });
    });
    it('Should test react user directory card', () => {
      cy.get('.card').eq(2).should('contain', 'React User Directory').within(() => {
        cy.get('#userDirectory').trigger('mouseover')
        cy.get('.dropdown').contains('Click For More Details').click()
        cy.get('.dropdown').contains('Click To Collapse').should('be.visible')
        cy.get('.description').should('be.visible')
        cy.get('#userDirectory').should('not.be.visible')
        cy.get('.collapsible-card').within(() => {
          cy.get('.dropdown').contains('Click To Collapse').click()
          cy.get('.description').should('not.be.visible')
          cy.get('.dropdown').contains('Click For More Details').should('be.visible')
        });
      }); 
    });
  });
});