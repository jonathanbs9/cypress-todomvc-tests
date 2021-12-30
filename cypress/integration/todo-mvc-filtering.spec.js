/// <reference types="cypress" />


describe('Filtering', () => {
    beforeEach(() => {
        // Visit
        cy.visit('http://todomvc-app-for-testing.surge.sh/')

        // Add Tasks
        cy.get('.new-todo').type("This is a Task Test {enter}")
        cy.get('.new-todo').type("This is a second Task Test {enter}")
        cy.get('.new-todo').type("Third Task Test {enter}")

        // 
        cy.get(':nth-child(2) > .view > .toggle').click()

    })

    // Active TODOS
    it('Should filter "Active" todos', () => {
        cy.contains('Active').click()

        cy.get('.todo-list li').should('have.length', 2)
    })

    // Completed TODOS
    it('Should filter "Completed" todos', () => {
        cy.contains('Completed').click()

        cy.get('.todo-list li').should('have.length', 1)
    })

    // All TODOS
    it('Should filter "All" todos', () => {
        cy.contains('All').click()

        cy.get('.todo-list li').should('have.length', 3)
    })
})