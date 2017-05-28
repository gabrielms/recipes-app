import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

import { RecipesPage } from '../recipes/recipes';
import { ShoppingListPage } from '../shopping-list/shopping-list';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  private shoppingListPage = ShoppingListPage;
  private recipesPage = RecipesPage;

}
