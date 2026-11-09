import { Component, input, output } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';
@Component({
  selector: 'app-card-recipe',
  imports: [],
  templateUrl: './card-recipe.html',
  styleUrl: './card-recipe.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardRecipe {
  recipecard = input.required<any>()
  clickCard = output<number>()

  onClic(){
    this.clickCard.emit(this.recipecard().id);
  }
}
