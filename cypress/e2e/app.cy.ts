describe('app', () => {
  it('home', () => {
    cy.visit('http://localhost:3000/');
    cy.get('h1').contains('Layout');
    cy.get('h2').contains('Home');
  });

  it('route', () => {
    cy.visit('http://localhost:3000/');
    cy.get('h2').contains('Home');
    cy.contains('About').click();
    cy.get('h2').contains('About');
  });
});