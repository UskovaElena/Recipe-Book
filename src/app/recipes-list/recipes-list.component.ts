import { Component } from '@angular/core';

import { recipes } from '../recipes';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent {
  products = recipes;

  share() {
    window.alert('The product has been shared!');
  }
}