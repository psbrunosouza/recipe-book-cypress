import {Component, Input, OnInit} from '@angular/core';
import {RecipeModel} from "../recipe.model";
import {RecipeBookService} from "../recipe-book.service";

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss'],
  providers: [RecipeBookService]
})
export class RecipeComponent implements OnInit{

  @Input() recipe: RecipeModel

  constructor(private recipeBookService: RecipeBookService) {
  }

  ngOnInit() {
  }

  deleteRecipe(id: number): void{
    const observer = {
      next: () => {
        console.log("complete")
      },
      error: (error: any) => {
        console.log(error)
      }
    }

    this.recipeBookService.delete(id)
      .subscribe(observer);
  }
}
