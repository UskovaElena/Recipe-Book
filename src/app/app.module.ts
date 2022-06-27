import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: RecipesListComponent },
      { path: 'recipes/:recipeId', component: RecipeDetailsComponent },
      { path: 'shopping-list', component: ShoppingListComponent },
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    RecipesListComponent,
    RecipeDetailsComponent,
    ShoppingListComponent

  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }