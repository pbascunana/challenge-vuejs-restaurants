

describe('Restaurants page tests', () => {
  it('Home', () => {
    cy.doHomeTests();
    cy.checkDate();
  })

  it('Change theme', () => {
    cy.doChangeThemeTest();
  })

  it('Meals', () => {
    cy.doMealTests();
  })

  it('Recipe', () => {
    cy.doRecipeTests();
  })

  it('Restaurant', () => {
    cy.doRestaurantTests();
    cy.checkDate();
  })
})
