/// <reference types="cypress" />
import { Elements } from './JS Files/Elements_Locator.js';

// handling the promise resolution
Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

describe('DemoQA Element Test', () => {
  beforeEach(() => {
    // Visit the website
    cy.visit('https://demoqa.com/')
    cy.get(':nth-child(1) > :nth-child(1) > .card-up').click();
  })

  it("open the Element Text-box Page", () => {
    cy.get(':nth-child(1) > .element-list > .menu-list > #item-0').click();
    cy.get('#userName').type('sufian');
    cy.get('#userEmail').type('sufian@test.com');
    cy.get('#currentAddress').type('devsinc');
    cy.get('#permanentAddress').type('devsinc');
  })

  it("Check Box select or deselect", () => {
    cy.get(':nth-child(1) > .element-list > .menu-list > #item-1').click();
    cy.wait(4000);
     // Check the checkbox
    cy.get('.rct-checkbox').check({force: true});
    cy.wait(4000);

  })

  it('should select and assert radio buttons', () => {
    cy.get(':nth-child(1) > .element-list > .menu-list > #item-2').click(); 

    cy.wait(4000);
    cy.get('input#yesRadio').click({force:true}).should('be.checked');
  })

  it('should check the web table', () => {
    cy.get(':nth-child(1) > .element-list > .menu-list > #item-3').click();
    cy.wait(4000);
    
    cy.get('#addNewRecordButton').click({force:true});
    
    //add new record 
    cy.get('#firstName').type('sufian');
    cy.get('#lastName').type('test');
    cy.get('#userEmail').type('sufian.test@yopmail.com');
    cy.get('#age').type('27');
    cy.get('#salary').type('230');
    cy.get('#department').type('software quality assurance');
    cy.get('#submit').click();

    //search the record
    cy.get('#searchBox').type('sufian');

    //applying asseration
    cy.get('.rt-tbody > :nth-child(1) > .rt-tr > :nth-child(1)').should('have.text', 'sufian');
  })

    //checking the double buttons 
    it('should double click the "Double Click Me" button', () => {
      cy.get(':nth-child(1) > .element-list > .menu-list > #item-4').click();
      cy.contains('Double Click Me').dblclick()
      cy.contains('You have done a double click').should('be.visible')
    })
    it('should right click the "Right Click Me" button', () => {
      cy.get(':nth-child(1) > .element-list > .menu-list > #item-4').click();

      cy.contains('Right Click Me').rightclick()
      cy.contains('You have done a right click').should('be.visible')
    })
    it.only('should perform a click and hold on the "Click and Hold Me" button', () => {
      cy.get(':nth-child(1) > .element-list > .menu-list > #item-4').click();
      cy.get('.btn btn-primary').click();

      cy.contains('You have done a click and hold').should('be.visible')
    })
  });