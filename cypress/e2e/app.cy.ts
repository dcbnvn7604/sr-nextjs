describe('app', () => {
  it('required login', () => {
    cy.visit('http://localhost:3000/');
    cy.get('h1').contains('Layout');
    cy.get('h2').contains('Login');
  });
});