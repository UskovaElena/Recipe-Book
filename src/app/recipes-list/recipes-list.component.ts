import { Component, OnInit } from '@angular/core';

import { recipes } from '../app.component';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit{
  recipes = recipes;
  constructor() {}

  ngOnInit() {
    this.recipes = recipes;
    let ingridients = JSON.parse(localStorage.getItem('ingridients'));
    if (!ingridients) {
      localStorage.setItem('ingridients', JSON.stringify({}));
    }
  }

}