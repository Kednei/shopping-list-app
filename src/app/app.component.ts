import { Component } from '@angular/core';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ShoppingListComponent],  // Certifique-se de que o componente ShoppingList está sendo importado aqui
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shopping-list-app';
}
