import { Component, inject, signal } from '@angular/core';
import { RecipeService } from '../../recipe-service';
import { CardRecipe } from '../card-recipe/card-recipe';

@Component({
  selector: 'app-list-recipes',
  imports: [CardRecipe],
  templateUrl: './list-recipes.html',
  styleUrl: './list-recipes.css',
})
export class ListRecipes {
  recipeService= inject(RecipeService);
  recipeList= signal(this.recipeService.getAll());
}
