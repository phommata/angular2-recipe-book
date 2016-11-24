import { Injectable } from '@angular/core';
import {Recipe} from "./recipe";

@Injectable()
export class RecipeService {
  recipes: Recipe[] = [
    new Recipe('Schnitzel', 'Very tasty', 'https://upload.wikimedia.org/wikipedia/commons/a/ae/Wiener-Schnitzel02.jpg', []),
    new Recipe('Summer Salad', 'Okayish', 'http://cdn.iowagirleats.com/wp-content/uploads/2013/05/Triple-Berry-Summer-Salad-03_mini.jpg', []),

  ];

  constructor() { }

  getRecipes(){
    return this.recipes;
  }

}
