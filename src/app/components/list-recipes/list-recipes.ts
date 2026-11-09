import { Component, inject, signal } from '@angular/core';
import { Recipe } from '../../recipe';

@Component({
  selector: 'app-list-recipes',
  imports: [],
  templateUrl: './list-recipes.html',
  styleUrl: './list-recipes.css',
})
export class ListRecipes {
  recipeService= inject(Recipe)
  recipeList= signal(this.recipeService.getAll())
}
