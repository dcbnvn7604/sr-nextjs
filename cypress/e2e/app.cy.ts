describe('app', () => {
  it('home', () => {
    cy.visit('http://localhost:3000/');
    cy.get('h1').contains('Layout');
    cy.get('h2').contains('Home');
  });
});