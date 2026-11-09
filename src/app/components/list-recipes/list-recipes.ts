import { Component, inject, signal } from '@angular/core';
import { RecipeService } from '../../recipe-service';
import { CardRecipe } from '../card-recipe/card-recipe';
import { DetailRecipe } from '../detail-recipe/detail-recipe';

@Component({
  selector: 'app-list-recipes',
  imports: [CardRecipe, DetailRecipe],
  templateUrl: './list-recipes.html',
  styleUrl: './list-recipes.css',
})
export class ListRecipes {
  recipeService = inject(RecipeService);
  recipeList = signal(this.recipeService.getAll());
  recipeselect = signal(0)

  onSelect(id: number) {
    this.recipeselect.set(id)
  }
  searchRecipe() {
    return this.recipeService.getById(this.recipeselect())
  }
}
