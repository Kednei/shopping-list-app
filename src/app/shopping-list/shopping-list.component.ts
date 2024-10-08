import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface ShoppingItem {
  name: string;
  purchased: boolean;
  editing: boolean; // Nova propriedade para controlar o estado de edição
}

@Component({
  selector: 'app-shopping-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
  newItem: string = '';
  shoppingList: ShoppingItem[] = [];

  addItem() {
    if (this.newItem.trim()) {
      this.shoppingList.push({ name: this.newItem.trim(), purchased: false, editing: false });
      this.newItem = '';
    }
  }

  deleteItem(index: number) {
    this.shoppingList.splice(index, 1);
  }

  togglePurchased(item: ShoppingItem) {
    item.purchased = !item.purchased;
  }

  startEditing(item: ShoppingItem) {
    item.editing = true;
  }

  stopEditing(item: ShoppingItem) {
    item.editing = false;
  }

  getPurchasedItems() {
    return this.shoppingList.filter(item => item.purchased);
  }

  getUnpurchasedItems() {
    return this.shoppingList.filter(item => !item.purchased);
  }
}
