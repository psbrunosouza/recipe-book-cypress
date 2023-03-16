import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {RecipeModel} from "./recipe.model";

@Injectable()
export class RecipeBookService {

  constructor(private httpClient: HttpClient) { }

  list(): Observable<RecipeModel[]> {
    return this.httpClient.get<RecipeModel[]>("http://localhost:3000/recipes");
  }

  delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(`http://localhost:3000/recipes/${id}`);
  }
}
