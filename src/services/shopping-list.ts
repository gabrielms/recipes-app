import { Ingredient } from '../models/ingredient';

export class ShoppingListService {
  private ingredients: Ingredient[] = [];

  add(name: string, amount: number){
    this.ingredients.push(new Ingredient(name, amount));
  }
  addMultiple(ingredients: Ingredient[]){
    this.ingredients.concat(ingredients);
  }
  remove(index: number){
    return this.ingredients.splice(index, 1);
  }
  get(){
    return this.ingredients.slice();
  }
}