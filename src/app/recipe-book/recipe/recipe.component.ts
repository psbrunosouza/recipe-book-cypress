import {Component, Input, OnInit} from '@angular/core';
import {RecipeModel} from "../recipe.model";

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit{

  @Input() recipe: RecipeModel

  constructor() {
  }

  ngOnInit() {
  }
}
