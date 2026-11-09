import { Component, input, output } from '@angular/core';
import { RecipeService } from '../../recipe-service';

@Component({
  selector: 'app-card-recipe',
  imports: [],
  templateUrl: './card-recipe.html',
  styleUrl: './card-recipe.css',
})
export class CardRecipe {
  recipecard = input.required<any>()
  clickCard = output<number>()

  
  onClic(){
    this.clickCard.emit(this.recipecard().id);
  }
}
