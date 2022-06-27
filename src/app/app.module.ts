import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { RecipesListComponent } from './recipes-list/recipes-list.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: RecipesListComponent },
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    RecipesListComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }