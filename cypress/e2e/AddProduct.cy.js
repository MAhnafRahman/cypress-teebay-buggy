describe("Teebay-Buggy flows", () => {
  it("Should add a product", () => {
    cy.visit("https://ehsanur-rahman-sazim.github.io/teebay-buggy/");
    cy.get(":nth-child(1) > .sc-bdvvtL").type("testuser@teebay.com");
    cy.get(":nth-child(2) > .sc-bdvvtL").type("123456");
    cy.get(".sc-ieecCq > .ui").click();
    cy.get(".right > .item").should("contain.text", "Logout");
    cy.get(".sc-iJKOTD > .ui").click();
    cy.get("input[name='title']").type("Test Product");
    cy.get(".form > :nth-child(2) > .ui > .dropdown").click();
    cy.get("input[name='title']").click();
    cy.get(".sc-gsDKAQ").click().type("Test Product Description");
    cy.get(".sc-egiyK > :nth-child(1) > .sc-bdvvtL").type("100");
    cy.get(".sc-ksdxgE > .field > .sc-bdvvtL").type("50");
    cy.get(".sc-bqiRlB > :nth-child(2) > .ui > .dropdown").click();
    cy.get(".sc-crHmcD > .ui").click();
  });
});
