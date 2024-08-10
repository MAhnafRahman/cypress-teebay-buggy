describe("Teebay-Buggy flows", () => {
  it("Should browse & search products successfully", () => {
    cy.visit("https://ehsanur-rahman-sazim.github.io/teebay-buggy/");
    cy.get(":nth-child(1) > .sc-bdvvtL").type("testuser@teebay.com");
    cy.get(":nth-child(2) > .sc-bdvvtL").type("123456");
    cy.get(".sc-ieecCq > .ui").click();

    cy.get('.ui.menu > :nth-child(2)').click();
    cy.get("input[name='title']").type("Ikea");
    cy.get(':nth-child(3) > .field > .ui > label').click();
    cy.get("button[type='submit']").click();
    cy.get("button[class='ui button']").click();

  });
});
