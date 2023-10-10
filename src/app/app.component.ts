import { Component } from '@angular/core';
import { Item } from './models/item';
import { Intersection, Not } from './components/utils/intersection';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  leftItems: Item[] = [
    { value: 1, isChecked: false },
    { value: 2, isChecked: false },
    { value: 3, isChecked: false },
    { value: 4, isChecked: false }
  ];

  rightItems: Item[] = [];
  private checkedItems: Item[] = [];

  handleToggle = (item: Item) => {
    const currentIndex = this.checkedItems.findIndex(x => x.value === item.value);
    const newCheckedIndex = [...this.checkedItems];

    item.isChecked = currentIndex === -1 ? true : false;
    item.isChecked ? newCheckedIndex.push(item) : newCheckedIndex.splice(currentIndex, 1);

    this.checkedItems = newCheckedIndex;
  }

  moveRight() {
    const leftCheckedItems = Intersection(this.leftItems, this.checkedItems);
    this.setRightItems(this.rightItems.concat(leftCheckedItems));
    this.setLeftItems(Not(this.leftItems, leftCheckedItems))
  }

  moveLeft() {
    const rightCheckedItems = Intersection(this.rightItems, this.checkedItems);
    this.setLeftItems(this.leftItems.concat(rightCheckedItems));
    this.setRightItems(Not(this.rightItems, rightCheckedItems));
  }

  private setRightItems = (items: Item[]) => this.rightItems = items;
  private setLeftItems = (items: Item[]) => this.leftItems = items;
}
