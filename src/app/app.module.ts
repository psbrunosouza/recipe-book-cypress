import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StepperComponent } from './stepper/stepper.component';
import { RecipeBookComponent } from './recipe-book/recipe-book.component';
import {HttpClientModule} from "@angular/common/http";
import { RecipeComponent } from './recipe-book/recipe/recipe.component';

@NgModule({
  declarations: [
    AppComponent,
    StepperComponent,
    RecipeBookComponent,
    RecipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
