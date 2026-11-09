import { Component, input, output } from '@angular/core';
import { Recipe } from '../../recipe';

@Component({
  selector: 'app-card-recipe',
  imports: [],
  templateUrl: './card-recipe.html',
  styleUrl: './card-recipe.css',
})
export class CardRecipe {
  recipeCard = input<Recipe>()
  clickCard = output<number>()
  
  onClic(){
    this.clickCard.emit(1)
  }
}
