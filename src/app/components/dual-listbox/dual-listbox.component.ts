import { Component, Input } from '@angular/core';
import { ListBoxItem } from 'src/app/models/listbox-item';
import { Intersection, Not } from './utils/intersection';

@Component({
  selector: 'app-dual-listbox',
  templateUrl: './dual-listbox.component.html',
  styleUrls: ['./dual-listbox.component.scss']
})
export class DualListboxComponent {
  @Input() leftItems: ListBoxItem[] = [];
  @Input() rightItems: ListBoxItem[] = [];

  private checkedItems: ListBoxItem[] = [];

  handleToggle = (item: ListBoxItem) => {
    const currentIndex = this.checkedItems.findIndex(x => x.value === item.value);
    const newCheckedIndex = [...this.checkedItems];

    item.isChecked = currentIndex === -1 ? true : false;
    item.isChecked ? newCheckedIndex.push(item) : newCheckedIndex.splice(currentIndex, 1);

    this.checkedItems = newCheckedIndex;
  }

  moveRight() {
    const leftCheckedItems = this.leftItems.filter(item => item.isChecked);
    this.rightItems.push(...leftCheckedItems);
    this.leftItems = this.leftItems.filter(item => !item.isChecked);
  }

  moveLeft() {
    const rightCheckedItems = this.rightItems.filter(item => item.isChecked);
    this.leftItems.push(...rightCheckedItems);
    this.rightItems = this.rightItems.filter(item => !item.isChecked);
  }
}
