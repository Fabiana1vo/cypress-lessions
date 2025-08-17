describe('login page suit tests', () => {
 beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/')
  })

  it('should access login page', () => { 
    cy.get('[data-test="login-button"]').click()
  })

  it('should add login information and redirect user to home page', () => {
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="input-loginEmail"]').type('ana@email.com')
    cy.get('[data-test="input-loginPassword"]').type('Senha123')
    cy.get('[data-test="submit-button"]').click()
  })

})