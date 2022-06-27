import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  constructor() {}
  ingredients = {};
  newIngredient = '';

  ngOnInit() {
    this.ingredients = JSON.parse(localStorage.getItem('ingredients'));
  }


}
