import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss']
})
export class ActionsComponent {
  @Output() moveRight: EventEmitter<void> = new EventEmitter<void>();
  @Output() moveLeft: EventEmitter<void> = new EventEmitter<void>();
}
