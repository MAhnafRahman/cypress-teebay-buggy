describe("Teebay-Buggy flows", () => {
  it("Should Update account info successfully", () => {
    cy.visit("https://ehsanur-rahman-sazim.github.io/teebay-buggy/");
    cy.get(":nth-child(1) > .sc-bdvvtL").type("testuser@teebay.com");
    cy.get(":nth-child(2) > .sc-bdvvtL").type("123456");
    cy.get(".sc-ieecCq > .ui").click();

    cy.get(".ui.menu > :nth-child(4)").click();
    cy.get("input[name='first_name']").clear().type("Ahnaf");
    cy.get("input[name='last_name']").clear().type("Rahman");
    cy.get("input[name='address']").clear().type("Dhaka");
    cy.get("input[name='email']").clear().type("ahnaf@yopmail.com");
    cy.get("input[name='phone_number']").clear().type("01757561514");
    cy.get("button[type='submit']").click();
  });
});
