import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  @Output() filterSelected: EventEmitter<string> = new EventEmitter<string>();

  filteration(option: string) {
    this.filterSelected.emit(option);
  }
}
