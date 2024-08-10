describe("Teebay-Buggy flows", () => {
  it("Should Sign Up", () => {
    cy.visit("https://ehsanur-rahman-sazim.github.io/teebay-buggy/");
    cy.get("a").click();
    cy.get("input[name='firstName']").type("Ahnaf");
    cy.get("input[name='lastName']").type("Rahman");
    cy.get("input[name='address']").type("Dhaka");
    cy.get("input[name='email']").type("a@yopmail.com");
    cy.get("input[name='phoneNumber']").type("01757561514");
    cy.get("input[name='password']").type("123456");
    cy.get("input[name='confirmPassword']").type("123456");
    cy.get("button[type='submit']").click();
  });
});
