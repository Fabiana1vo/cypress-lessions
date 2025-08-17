describe('login page suit tests', () => {
 beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/')
  })

  it('deve clicar no botão de login', () => { 
    cy.get('[data-test="login-button"]').click()
  })

  it('deve mostrar as mensagens de erro quando as credenciais informadas forem inválidas', () => {
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="submit-button"]').click()
    cy.contains('É necessário informar um endereço de email').should('be.visible')
    cy.contains('Insira sua senha').should('be.visible')
  })

  it('should add login information and redirect user to home page', () => {
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="submit-button"]').click()
    cy.contains('É necessário informar um endereço de email').should('be.visible')
    cy.contains('Insira sua senha').should('be.visible')
  })

    it('should validate email and password format', () => {
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="input-loginEmail"]').type('anaemail.com')
    cy.get('[data-test="input-loginPassword"]').type('senha123')
    cy.get('[data-test="submit-button"]').click()
    cy.contains('Por favor, verifique o email digitado').should('be.visible')
    cy.contains('A senha deve conter pelo menos uma letra maiúscula, um número e ter entre 6 e 15 caracteres').should('be.visible')
  })

  

})