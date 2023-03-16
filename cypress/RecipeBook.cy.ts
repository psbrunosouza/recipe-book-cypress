import {RecipeBookComponent} from "../src/app/recipe-book/recipe-book.component";
import {HttpClientModule} from "@angular/common/http";
import {RecipeBookService} from "../src/app/recipe-book/recipe-book.service";

describe('RecipeBook.cy.ts', () => {

  let recipeBook: RecipeBookComponent

  before(() => {
    cy.mount(RecipeBookComponent, {
      declarations: [RecipeBookComponent],
      imports: [HttpClientModule],
      providers: [RecipeBookService]
    }).then(({component}) => {
      recipeBook = component
    })
  })

  it('recipes should have 0 recipes initially', () => {
    cy.wrap(recipeBook).its('recipes.length').should('eq', 0)
  })

  it('recipes should have a list of recipes', () => {
    // cy.wrap(recipeBook.component).invoke('loadRecipes')
    cy.wrap(recipeBook).its('recipes.length').should('be.greaterThan', 0)
  })
})
