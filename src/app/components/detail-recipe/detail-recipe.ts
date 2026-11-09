import { Component, input, output, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-detail-recipe',
  imports: [],
  templateUrl: './detail-recipe.html',
  styleUrl: './detail-recipe.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailRecipe {
  receta = input.required<any>()
  closerecipe = output<number>()

  close() {
    this.closerecipe.emit(0)
  }
}
