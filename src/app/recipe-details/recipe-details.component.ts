import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { recipes, Recipe } from '../app.component';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css'],
})

export class RecipeDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute) {}
  recipe: Recipe | undefined;

  addIngredient(name: string) {
    
  }

  ngOnInit() {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const recipeIdFromRoute = Number(routeParams.get('recipeId'));
  
    // Find the product that correspond with the id provided in route.
    this.recipe = recipes.find(recipe => recipe.id === recipeIdFromRoute);
  }
}
