import { Component } from '@angular/core';
import { ListBoxItem } from './models/listbox-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  X: ListBoxItem[] = [{ value: 1, isChecked: false }, { value: 2, isChecked: false }, { value: 3, isChecked: false }, { value: 4, isChecked: false }];
  Y: ListBoxItem[] = [];
}
