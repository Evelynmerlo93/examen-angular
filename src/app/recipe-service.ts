import { Injectable,  } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  recipes=[
    {
      id: 1,
      name: 'Spaghetti Carbonara',
      description: 'Clásico plato de pasta italiana con huevo, queso pecorino, guanciale y pimienta negra.',
      image: 'https://placehold.co/300x400?text=Carbonara',
      category: 'Pasta',
      preparationTime: 20,
      difficulty: 'Media',
      servings: 2
    },
    {
      id: 2,
      name: 'Pancakes Caseros',
      description: 'Tortitas esponjosas ideales para el desayuno, acompañadas de sirope de arce.',
      image: 'https://placehold.co/300x400?text=Pancakes',
      category: 'Desayuno',
      preparationTime: 15,
      difficulty: 'Fácil',
      servings: 4
    },
    {
      id: 3,
      name: 'Ensalada César',
      description: 'Lechuga romana crujiente, picatostes, queso parmesano y salsa césar tradicional.',
      image: 'https://placehold.co/300x400?text=Ensalada',
      category: 'Ensaladas',
      preparationTime: 10,
      difficulty: 'Fácil',
      servings: 2
    },
    {
      id: 4,
      name: 'Hamburguesa Clásica',
      description: 'Carne de ternera jugosa con queso cheddar, lechuga, tomate y salsa especial en pan brioche.',
      image: 'https://placehold.co/300x400?text=Hamburguesa',
      category: 'Comida Rápida',
      preparationTime: 25,
      difficulty: 'Fácil',
      servings: 1
    },
    {
      id: 5,
      name: 'Sopa de Pollo',
      description: 'Caldo reconfortante con verduras frescas, fideos y trozos tiernos de pollo.',
      image: 'https://placehold.co/300x400?text=Sopa',
      category: 'Sopas',
      preparationTime: 40,
      difficulty: 'Fácil',
      servings: 4
    },
    {
      id: 6,
      name: 'Tacos al Pastor',
      description: 'Tortillas de maíz con carne marinada, piña, cilantro y cebolla.',
      image: 'https://placehold.co/300x400?text=Tacos',
      category: 'Mexicana',
      preparationTime: 30,
      difficulty: 'Media',
      servings: 3
    },
    {
      id: 7,
      name: 'Tortilla de Patatas',
      description: 'El clásico español a base de patatas, huevo y cebolla pochada.',
      image: 'https://placehold.co/300x400?text=Tortilla',
      category: 'Tradicional',
      preparationTime: 35,
      difficulty: 'Media',
      servings: 4
    },
    {
      id: 8,
      name: 'Salmón al Horno',
      description: 'Lomo de salmón fresco horneado con hierbas finas y rodajas de limón.',
      image: 'https://placehold.co/300x400?text=Salmon',
      category: 'Pescados',
      preparationTime: 20,
      difficulty: 'Fácil',
      servings: 2
    },
    {
      id: 9,
      name: 'Pizza Margherita',
      description: 'Base de masa fina con salsa de tomate natural, mozzarella fresca y albahaca.',
      image: 'https://placehold.co/300x400?text=Pizza',
      category: 'Italiana',
      preparationTime: 25,
      difficulty: 'Media',
      servings: 2
    },
    {
      id: 10,
      name: 'Brownie de Chocolate',
      description: 'Bizcocho de chocolate denso y húmedo con trocitos de nueces.',
      image: 'https://placehold.co/300x400?text=Brownie',
      category: 'Postres',
      preparationTime: 40,
      difficulty: 'Fácil',
      servings: 6
    }
  ];

  getAll(){
  return this.recipes;
  }

  getById(id:number){
  return this.recipes.find(r => r.id === id);
  }
}
  

