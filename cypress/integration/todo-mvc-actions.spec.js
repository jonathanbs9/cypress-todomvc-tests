/// <reference types="cypress" />

describe('TODO actions', () => {
    beforeEach(() => {
        // ?delay-new-todo=5000
        cy.visit('http://todomvc-app-for-testing.surge.sh/')
    
        cy.get('.new-todo', {timeout: 6000})
            .type("First Task - Install nodejs {enter}")

    })
    
    it('Should Add a new todo to the list', () => {
        // Label contains text
        cy.get('label').should('have.text', 'First Task - Install nodejs')
    
        // Toggle not checked
        cy.get('.toggle').should('not.be.checked')
    })
    
    it('Should mark a todo as completed', () => {
        // Click toggle
        cy.get('.toggle').click()
    
        // Label contains CSS property
        cy.get('label').should('have.css', 'text-decoration-line','line-through')
        cy.get('label').should('have.css', 'text-decoration-thickness','auto')
        
    })
    
    it('Should clear completed todos', () => {
        cy.get('.toggle').click()
        cy.contains('Clear').click()
        cy.get('.todo-list').should('not.have.descendants', 'li')
    })
})


