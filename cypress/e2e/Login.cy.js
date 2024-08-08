describe("All Orders", () => {
  it("Should Login successfully", () => {
    cy.visit("https://ehsanur-rahman-sazim.github.io/teebay-buggy/");
    cy.get(":nth-child(1) > .sc-bdvvtL").type("testuser@teebay.com");
    cy.get(":nth-child(2) > .sc-bdvvtL").type("123456");
    cy.get(".sc-ieecCq > .ui").click();
    cy.get(".right > .item").should("contain.text", "Logout");
  });
});
