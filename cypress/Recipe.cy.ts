import {RecipeComponent} from "../src/app/recipe-book/recipe/recipe.component";
import {RecipeModel} from "../src/app/recipe-book/recipe.model";
import {createOutputSpy} from "cypress/angular";
import {RecipeBookService} from "../src/app/recipe-book/recipe-book.service";
import {HttpClientModule} from "@angular/common/http";

describe('Recipe.cy.ts', () => {
  it('should mount recipe component', () => {
    cy.mount(RecipeComponent, {
      imports: [HttpClientModule],
      componentProperties: {
        recipe: Object.assign({
          "id": 1,
          "recipe": "French Fries",
          "author": "Moeb",
          "comments": ["Very good", "Awesome"],
          "ingredients": ["Potatoes", "Salt", "Oil"]
        } as RecipeModel, new RecipeModel()),
      }
    });
  })

  it('should display recipe', () => {

    cy.mount(RecipeComponent, {
      declarations: [RecipeComponent],
      imports: [HttpClientModule],
      componentProperties: {
        recipe: Object.assign({
          "id": 1,
          "recipe": "French Fries",
          "author": "Moeb",
          "comments": ["Very good", "Awesome"],
          "ingredients": ["Potatoes", "Salt", "Oil"]
        } as RecipeModel, new RecipeModel()),
      }
    })

    cy.get('[data-cy=recipe]').should('have.text', 'French Fries')
  })

  it('should display author', () => {
    cy.mount(RecipeComponent, {
      declarations: [RecipeComponent],
      imports: [HttpClientModule],
      componentProperties: {
        recipe: Object.assign({
          "id": 1,
          "recipe": "French Fries",
          "author": "Moeb",
          "comments": ["Very good", "Awesome"],
          "ingredients": ["Potatoes", "Salt", "Oil"]
        } as RecipeModel, new RecipeModel()),
      }
    })

    cy.get('[data-cy=author]').should('have.text', 'Moeb')
  })

  it('should display comments', () => {
    cy.mount(RecipeComponent, {
      declarations: [RecipeComponent],
      imports: [HttpClientModule],
      componentProperties: {
        recipe: Object.assign({
          "id": 1,
          "recipe": "French Fries",
          "author": "Moeb",
          "comments": ["Very good", "Awesome"],
          "ingredients": ["Potatoes", "Salt", "Oil"]
        } as RecipeModel, new RecipeModel()),
      }
    })

    cy.get('.comments').each((element, index, $list) => {
      const comment = element.text();
      expect(["Very good", "Awesome"]).to.include(comment)
    })
  })

  it('should display ingredients', () => {
    cy.mount(RecipeComponent, {
      declarations: [RecipeComponent],
      imports: [HttpClientModule],
      componentProperties: {
        recipe: Object.assign({
          "id": 1,
          "recipe": "French Fries",
          "author": "Moeb",
          "comments": ["Very good", "Awesome"],
          "ingredients": ["Potatoes", "Salt", "Oil"]
        } as RecipeModel, new RecipeModel()),
      }
    })

    cy.get('.ingredients').each((element, index, $list) => {
      const ingredient = element.text();
      expect(["Potatoes", "Salt", "Oil"]).to.include(ingredient)
    })
  })

  it('should display no comments message', () => {
    cy.mount(RecipeComponent, {
      declarations: [RecipeComponent],
      imports: [HttpClientModule],
      componentProperties: {
        recipe: Object.assign({
          "id": 1,
          "recipe": "French Fries",
          "author": "Moeb",
          "comments": [],
          "ingredients": ["Potatoes", "Salt", "Oil"]
        } as RecipeModel, new RecipeModel()),
      }
    })

    cy.get('[data-cy=no-comments-found]').should('contain', 'no comments found')
  })

  it('should display no ingredients message', () => {
    cy.mount(RecipeComponent, {
      declarations: [RecipeComponent],
      imports: [HttpClientModule],
      componentProperties: {
        recipe: Object.assign({
          "id": 1,
          "recipe": "French Fries",
          "author": "Moeb",
          "comments": ["Very good", "Awesome"],
          "ingredients": []
        } as RecipeModel, new RecipeModel()),
      }
    })

    cy.get('[data-cy=no-ingredients-found]').should('contain', 'no ingredients found')
  })

  it('should display no ingredients message', () => {
    cy.mount(RecipeComponent, {
      declarations: [RecipeComponent],
      imports: [HttpClientModule],
      componentProperties: {
        recipe: Object.assign({
          "id": 1,
          "recipe": "French Fries",
          "author": "Moeb",
          "comments": ["Very good", "Awesome"],
          "ingredients": []
        } as RecipeModel, new RecipeModel()),
      }
    }).then(({component}) => {
      const deleteRecipeSpy = cy.spy(component.deleteRecipe);

      cy.get('[data-cy=delete]').trigger('click', {args: [1]});

      expect(deleteRecipeSpy).to.have.been.calledOnceWith(1);
    })
  })
})
