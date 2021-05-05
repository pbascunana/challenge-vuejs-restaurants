const dayjs = require('dayjs')
var advancedFormat = require('dayjs/plugin/advancedFormat')
dayjs.extend(advancedFormat)
const test = require('../constants/constants')

Cypress.Commands.add("doHomeTests", () => {
  cy.visit(test.ROUTE_HOME);
  cy.get(test.HEADER).should('exist');
  cy.get(test.HEADER_HOME_LINK).should('exist');
  cy.get(test.HEADER_MEALS_LINK).should('exist');
  cy.get(test.HEADER_RESTAURANTS_LINK).should('exist');
  cy.get(test.BUTTON_CHANGE_THEME).should('exist');
})

Cypress.Commands.add("checkDate", () => {
  const todayDate = dayjs().format('dddd, MMMM Do YYYY,');
  cy.get(test.TEXT_WELCOME).contains(todayDate);
})

Cypress.Commands.add("doChangeThemeTest", () => {
  cy.get(test.APP).should('have.class', 'theme');
  cy.get(test.BUTTON_CHANGE_THEME).click();
  cy.get(test.APP).should('have.class', 'theme__dark');
})

Cypress.Commands.add("doMealTests", () => {
  cy.get(test.HEADER_MEALS_LINK).click();
  cy.get(test.BUTTON_CALCULATE_MEAL).click();
  cy.url().should('include', test.ROUTE_MEALS);
  cy.get(test.HEADER).should('exist');
  cy.get(test.BUTTON_CHANGE_THEME).should('exist');
  cy.get(test.INPUT_RECIPE_EGGS).type(3);
  cy.get(test.INPUT_RECIPE_PASTA).type(1040);
  cy.get(test.INPUT_RECIPE_BUTTER).type(1010);
  cy.get(test.INPUT_RECIPE_MILK).type(405);
  cy.get(test.INPUT_RECIPE_OIL).type(300);
  cy.get(test.INPUT_RECIPE_BACON).type(410);
})

Cypress.Commands.add("doRecipeTests", () => {
  cy.get(test.BUTTON_CALCULATE_MEAL).click()
  cy.url().should('include', test.ROUTE_RECIPE);
  cy.get(test.HEADER).should('exist');
  cy.get(test.BUTTON_CHANGE_THEME).should('exist');
  cy.get(test.BANNER_TEXT).contains('El restaurante');
  cy.get(test.BANNER_IMAGE).should('exist');
  cy.get(test.TEXT_SECRET_RECIPE).should('exist').contains('2');
  cy.get(test.TEXT_MESSAGE).should('exist');
  cy.get(test.TEXT_PASTA).contains('1000');
  cy.get(test.TEXT_BACON).contains('400');
  cy.get(test.TEXT_EGGS).contains('2');
  cy.get(test.TEXT_MILK).contains('400');
  cy.get(test.TEXT_BUTTER).contains('1000');
  cy.get(test.TEXT_OIL).contains('200');
})

Cypress.Commands.add("doRestaurantTests", () => {
  cy.get(test.HEADER_RESTAURANTS_LINK).click();
  cy.url().should('include', test.ROUTE_RESTAURANTS);
  cy.get(test.HEADER).should('exist');
  cy.get(test.BUTTON_CHANGE_THEME).should('exist');
  cy.get(test.INPUT_FIND_STORES).should('exist');
  cy.get(test.TEXT_COUNT_STORES).should('exist').contains('9999');
  cy.get(test.INPUT_FIND_STORES).type(101);
  cy.get(test.TEXT_COUNT_STORES).contains('20');
  cy.get(test.TEXT_STORE_TITLE).should('exist');
  cy.get(test.TEXT_STORE_LOCATION).should('exist');
  cy.get(test.IMAGE_STORE).should('exist');
  cy.get(test.TEXT_JOKE_STORE).should('exist');
})