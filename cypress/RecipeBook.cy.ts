import {RecipeBookComponent} from "../src/app/recipe-book/recipe-book.component";
import {HttpClientModule} from "@angular/common/http";
import {RecipeBookService} from "../src/app/recipe-book/recipe-book.service";
import {MountResponse} from "cypress/angular";

describe('RecipeBook.cy.ts', () => {

  let recipeBook: MountResponse<RecipeBookComponent>

  before(() => {
    cy.mount(RecipeBookComponent, {
      declarations: [RecipeBookComponent],
      imports: [HttpClientModule],
      providers: [RecipeBookService]
    }).then((component) => {
      recipeBook = component
    })
  })

  it('recipes should have 0 recipes initially', () => {
    cy.wrap(recipeBook).then((recipeBook) => {
      expect(recipeBook.component.recipes.length).to.equal(0);
    })
  })

  it('recipes should have a list of recipes', () => {
    cy.wrap(recipeBook).then((recipeBook) => {
      expect( recipeBook.component.recipes.length).to.greaterThan(0);
    })
  })
})
