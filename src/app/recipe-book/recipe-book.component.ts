import {Component, OnInit} from '@angular/core';
import {RecipeBookService} from "./recipe-book.service";
import {RecipeModel} from "./recipe.model";

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html',
  styleUrls: ['./recipe-book.component.scss']
})
export class RecipeBookComponent implements OnInit{
  recipes: RecipeModel[] = [];
  constructor(private recipeBookService: RecipeBookService) {}

  ngOnInit() {
    this.loadRecipes();
  }

  loadRecipes(): void {
    this.recipeBookService.list().subscribe((recipes) => {
      this.recipes = recipes;
    });
  }
}
