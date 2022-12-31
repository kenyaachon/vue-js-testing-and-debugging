describe("Login test", () => {
  it("can Login with email and password", () => {
    // Load the page
    cy.visit("http://localhost:8080/");
    // enter login credentials
    cy.get(".login-email").type("test@gmail.com");
    cy.get(".login-password").type("hello1");

    cy.get(".login-button").click();
    // assert profile page destination

    cy.url().should("include", "/profile");
  });
});
