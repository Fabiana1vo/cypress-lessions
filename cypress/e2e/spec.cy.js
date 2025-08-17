describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/')
    cy.contains('a', 'Cadastrar').click()
    cy.get('input[name="nome"]').type('John Doe')
    cy.get('input[name="email"]').type('janedoe@email.com')
    cy.get('input[name="password"]').type('Janedoe123@')
    cy.get('input[name="confirm_password"]').type('Janedoe123@')
    cy.contains('button', 'Cadastrar').click()
    
  })
})