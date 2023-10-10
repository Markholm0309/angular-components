import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from 'src/app/models/item';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  @Input() items: Item[];
  @Output() handleToggle: EventEmitter<Item> = new EventEmitter<Item>();

  handleEmit(item: Item) {
    this.handleToggle.emit(item);
  }
}
