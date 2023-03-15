import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {RecipeModel} from "./recipe.model";

@Injectable({
  providedIn: 'root'
})
export class RecipeBookService {

  constructor(private httpClient: HttpClient) { }

  list(): Observable<RecipeModel[]> {
    return this.httpClient.get<RecipeModel[]>("http://localhost:3000/recipes")
  }
}
