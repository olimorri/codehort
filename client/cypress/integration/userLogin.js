describe('Create User', () => {
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
  it('Navigates to logout', () => {
    // cy.get('button[id=menu-button-3]').click();
    // cy.contains('Logout').click();
    // cy.contains('Yes').click();
    // cy.url().should('eq', 'http://localhost:3000/');
  });
});
