import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ListBoxItem } from 'src/app/models/listbox-item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent {
  @Input() item: ListBoxItem;
  @Output() handleToggle: EventEmitter<ListBoxItem> = new EventEmitter<ListBoxItem>();
}
