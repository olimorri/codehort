describe('Log into account, visit lesson, log out', () => {
  beforeEach(() => {
    Cypress.Cookies.preserveOnce('sid');
  });
  it('Visits HomePage of Codehort', () => {
    cy.visit('http://localhost:3000/');
  });
  it('Navigates to login', () => {
    cy.get('.sign-in-up').click();
    cy.url().should('include', '/login');
  });
  it('Logs user in', () => {
    cy.get('input[id=username]').type('test');
    cy.get('input[id=password]').type('test');
    cy.get('.button').click();
    cy.url().should('include', '/dashboard');
  });
  it('Navigates to express lesson', () => {
    cy.get('#Express').find('a').click();
    cy.url().should('include', '/lesson/1');
  });

  it('Logs user out', () => {
    cy.contains(/logout/i).click();
  });
});
