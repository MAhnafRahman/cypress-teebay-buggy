describe("Validate view count change on product visit", () => {
  it("Should increase view count after visiting a product", () => {
    //Login
    cy.visit("https://ehsanur-rahman-sazim.github.io/teebay-buggy/");
    cy.get(":nth-child(1) > .sc-bdvvtL").type("testuser@teebay.com");
    cy.get(":nth-child(2) > .sc-bdvvtL").type("123456");
    cy.get(".sc-ieecCq > .ui").click();

    // Visit the Browse Products page
    cy.get(".ui.menu > :nth-child(2)").click();

    // Select the second product in the list
    cy.get(":nth-child(2) > .ui > .sc-pVTFL > .sc-jrQzAO > .sc-hKwDye").as(
      "secondProduct"
    );

    // Function to validate view count change
    const validateViewCount = (secondProduct) => {
      // Capture initial view count
      cy.get(`@${secondProduct}`)
        .find(":nth-child(2) > .ui > .sc-furwcr > :nth-child(2)")
        .invoke("text")
        .then((initialCount) => {
          const initialViewCount = parseInt(initialCount, 10);

          // Visit the product to increase view count
          cy.get(`@${secondProduct}`).click();

          // Capture the view count again and validate the change
          cy.get(`@${secondProduct}`)
            .find(".sc-jgrJph > :nth-child(2)")
            .invoke("text")
            .should((newCount) => {
              const newViewCount = parseInt(newCount, 10);
              expect(newViewCount).to.be.greaterThan(initialViewCount);
            });
        });
    };

    // Validate view count for the second product
    validateViewCount("secondProduct");
  });
});
