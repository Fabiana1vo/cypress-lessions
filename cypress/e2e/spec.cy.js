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

describe('should testing all routes on adopet website', () => {
   it('should visit home page and click on the ver pets button', () => { 
    cy.visit('https://adopet-frontend-cypress.vercel.app/')
    cy.contains('a', 'Ver pets disponíveis para adoção').click()

   })

   it('should test all the headers buttons', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/')
    cy.get('a[aria-label="Tela inicial"]').click();
    cy.get('a[aria-label="Ir para Mensagens"]').click();
   })

   it('should visit the login page', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/login')
   })

   it('should visit the home page', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/home')
   })
   

   it('should visit the home page and click on the Falar com responsável button', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/home')
    cy.get('a[aria-label="Falar com responsável"]').first().click();
   })

})