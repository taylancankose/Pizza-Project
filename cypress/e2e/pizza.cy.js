describe("pizza site test", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/");
  });

  it("checks hungry btn", () => {
    cy.get('[data-cy="hungry-btn"]').should("be.enabled");
    cy.get('[data-cy="hungry-btn"]').click();
    cy.url().should("eq", "http://localhost:5173/order");
  });

  it("should click food categories correctly", () => {
    cy.get('[data-cy="Ramen"]').click();
    cy.get('[data-cy="Ramen"]').should("have.class", "bg-myDarkGray");
    cy.get('[data-cy="food-name"]').contains("Miso ramen");
  });

  it("should render order page correctly with correct food", () => {
    cy.get('[data-cy="Ramen"]').click();
    cy.get('[data-cy="food-div"]').eq(0).click();
    cy.url().should("eq", "http://localhost:5173/order");
    cy.get('[data-cy="pizza-name"]').contains("Shoyu ramen");
  });

  it("should select correct food size", () => {
    cy.get('[data-cy="Ramen"]').click();
    cy.get('[data-cy="food-div"]').eq(0).click();
    cy.url().should("eq", "http://localhost:5173/order");
    cy.get('[data-cy="m-food-size"]').click();
    cy.get('[data-cy="m-food-size"]').should("have.class", "bg-myYellow");
  });

  it("should select correct dough size", () => {
    cy.get('[data-cy="Ramen"]').click();
    cy.get('[data-cy="food-div"]').eq(0).click();
    cy.url().should("eq", "http://localhost:5173/order");
    cy.get('[data-cy="select-dough"]')
      .select("ince")
      .should("have.value", "ince");
  });

  it("should not send the form because of missing dough size", () => {
    cy.get('[data-cy="Ramen"]').click();
    cy.get('[data-cy="food-div"]').eq(0).click();
    cy.url().should("eq", "http://localhost:5173/order");
    cy.get('[type="checkbox"]').check("Domates");
    cy.get('[type="checkbox"]').check("Biber");
    cy.get('[type="checkbox"]').check("Sosis");
    cy.get('[type="checkbox"]').check("Kabak");
    cy.get('[type="checkbox"]').check("Sarımsak");
    cy.get('[type="checkbox"]').check("Ananas");
    cy.get('[data-cy="name-input"]').type("taylan can");
    cy.get('[data-cy="textarea-notes"]').type("Hızlı gelirse sevinirim :)");
    cy.get('[data-cy="order-btn"]').should("be.disabled");
  });

  it("should not send the form because of missing ingredient length", () => {
    cy.get('[data-cy="Ramen"]').click();
    cy.get('[data-cy="food-div"]').eq(0).click();
    cy.url().should("eq", "http://localhost:5173/order");
    cy.get('[data-cy="select-dough"]')
      .select("ince")
      .should("have.value", "ince");
    cy.get('[data-cy="name-input"]').type("taylan can");
    cy.get('[data-cy="textarea-notes"]').type("Hızlı gelirse sevinirim :)");
    cy.get('[type="checkbox"]').check("Domates");
    cy.get('[type="checkbox"]').check("Biber");
    cy.get('[data-cy="order-btn"]').should("be.disabled");
  });

  it("should not send the form because of exceeding ingredient length", () => {
    cy.get('[data-cy="Ramen"]').click();
    cy.get('[data-cy="food-div"]').eq(0).click();
    cy.url().should("eq", "http://localhost:5173/order");
    cy.get('[data-cy="select-dough"]')
      .select("ince")
      .should("have.value", "ince");
    cy.get('[data-cy="name-input"]').type("taylan can");
    cy.get('[data-cy="textarea-notes"]').type("Hızlı gelirse sevinirim :)");
    cy.get('[type="checkbox"]').check("Domates");
    cy.get('[type="checkbox"]').check("Biber");
    cy.get('[type="checkbox"]').check("Sucuk");
    cy.get('[type="checkbox"]').check("Mısır");
    cy.get('[type="checkbox"]').check("Pepperoni");
    cy.get('[type="checkbox"]').check("Soğan");
    cy.get('[type="checkbox"]').check("Sarımsak");
    cy.get('[type="checkbox"]').check("Jalepeno");
    cy.get('[type="checkbox"]').check("Kabak");
    cy.get('[type="checkbox"]').check("Ananas");
    cy.get('[type="checkbox"]').check("Ançuez");
    cy.get('[type="checkbox"]').check("Tavuk Izgara");
    cy.get('[data-cy="order-btn"]').should("be.disabled");
  });

  it("should not send the form because of short name input", () => {
    cy.get('[data-cy="Ramen"]').click();
    cy.get('[data-cy="food-div"]').eq(0).click();
    cy.url().should("eq", "http://localhost:5173/order");
    cy.get('[data-cy="select-dough"]')
      .select("ince")
      .should("have.value", "ince");
    cy.get('[data-cy="name-input"]').type("ta");
    cy.get('[data-cy="textarea-notes"]').type("Hızlı gelirse sevinirim :)");
    cy.get('[type="checkbox"]').check("Domates");
    cy.get('[type="checkbox"]').check("Biber");
    cy.get('[type="checkbox"]').check("Sucuk");
    cy.get('[type="checkbox"]').check("Mısır");
    cy.get('[type="checkbox"]').check("Pepperoni");
    cy.get('[data-cy="order-btn"]').should("be.disabled");
  });

  it("should increase food amount", () => {
    cy.get('[data-cy="Ramen"]').click();
    cy.get('[data-cy="food-div"]').eq(0).click();
    cy.url().should("eq", "http://localhost:5173/order");
    cy.get('[data-cy="increase"]').click();
    cy.get('[data-cy="amount"]').contains("2");
  });

  it("should decrease food amount and not less than 1", () => {
    cy.get('[data-cy="Ramen"]').click();
    cy.get('[data-cy="food-div"]').eq(0).click();
    cy.url().should("eq", "http://localhost:5173/order");
    cy.get('[data-cy="decrease"]').should("be.disabled");
    cy.get('[data-cy="increase"]').click();
    cy.get('[data-cy="decrease"]').click();
    cy.get('[data-cy="amount"]').contains("1");
  });

  it("should successfully send the form & show data successfully", () => {
    cy.get('[data-cy="Ramen"]').click();
    cy.get('[data-cy="food-div"]').eq(0).click();
    cy.url().should("eq", "http://localhost:5173/order");
    cy.get('[data-cy="select-dough"]')
      .select("ince")
      .should("have.value", "ince");
    cy.get('[data-cy="name-input"]').type("taylan can köse");
    cy.get('[data-cy="textarea-notes"]').type("Hızlı gelirse sevinirim :)");
    cy.get('[type="checkbox"]').check("Domates");
    cy.get('[type="checkbox"]').check("Biber");
    cy.get('[type="checkbox"]').check("Sucuk");
    cy.get('[type="checkbox"]').check("Mısır");
    cy.get('[type="checkbox"]').check("Pepperoni");
    cy.get('[data-cy="order-btn"]').should("be.enabled");
    cy.get('[data-cy="order-btn"]').click();
    cy.url("http://localhost:5173/success");
    cy.get('[data-cy="order-user"]').contains("taylan can köse");
  });
});
