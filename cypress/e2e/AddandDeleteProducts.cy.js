describe("Add and Delete Products", () => {
  // Function to generate random product data
  const generateRandomProductData = () => {
    return {
      name: `Product ${Math.random().toString(36).substring(7)}`,
      regularPrice: (Math.random() * 100).toFixed(2),
      rentPrice: (Math.random() * 100).toFixed(2),
      description: `Description ${Math.random().toString(36).substring(10)}`,
    };
  };

  it("should add 5 new products and delete the 3rd and 4th products", () => {
    //Login
    cy.visit("https://ehsanur-rahman-sazim.github.io/teebay-buggy/");
    cy.get(":nth-child(1) > .sc-bdvvtL").type("testuser@teebay.com");
    cy.get(":nth-child(2) > .sc-bdvvtL").type("123456");
    cy.get(".sc-ieecCq > .ui").click();

    // Add 5 new products
    for (let i = 0; i < 5; i++) {
      const product = generateRandomProductData();

      // Click the button to add a new product
      cy.get("button[class='ui blue button']").click();

      // Fill in the product details
      cy.get("input[name='title']").type(product.name);
      cy.get(".form > :nth-child(2) > .ui > .dropdown").click();
      cy.get("input[name='title']").click();
      cy.get(".sc-gsDKAQ").click().type(product.description);
      cy.get(".sc-egiyK > :nth-child(1) > .sc-bdvvtL").type(
        product.regularPrice
      );
      cy.get(".sc-ksdxgE > .field > .sc-bdvvtL").type(product.rentPrice);
      cy.get(".sc-bqiRlB > :nth-child(2) > .ui > .dropdown").click();
      // Submit the form to add the product
      cy.get(".sc-crHmcD > .ui").click();

      // Wait for the product to be added (assuming a success message or UI change)
      cy.wait(1000);
      cy.get('.active')
      cy.wait(1000);
    }

    // Delete the 3rd & 4th product
    for (let j = 0; j < 2; j++) {
    cy.get(
      ":nth-child(3) > :nth-child(1) > .container > .sc-pVTFL > .sc-jrQzAO > .ui"
    ).click();
    cy.get('.actions > .blue').click();
    cy.wait(1000);
    }

    
  });
});
