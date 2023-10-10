import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ListBoxItem } from 'src/app/models/listbox-item';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  @Input() items: ListBoxItem[];
  @Output() handleToggle: EventEmitter<ListBoxItem> = new EventEmitter<ListBoxItem>();

  handleEmit(item: ListBoxItem) {
    this.handleToggle.emit(item);
  }
}
