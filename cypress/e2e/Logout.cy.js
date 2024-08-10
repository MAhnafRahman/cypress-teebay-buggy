describe("Teebay-Buggy flows", () => {
  it("Should Logout successfully", () => {
    cy.visit("https://ehsanur-rahman-sazim.github.io/teebay-buggy/");
    cy.get(":nth-child(1) > .sc-bdvvtL").type("testuser@teebay.com");
    cy.get(":nth-child(2) > .sc-bdvvtL").type("123456");
    cy.get(".sc-ieecCq > .ui").click();
    cy.get("div[class='right menu'][a]").click();
  });
});
