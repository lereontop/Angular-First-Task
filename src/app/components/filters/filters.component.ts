import { CommonModule } from '@angular/common';
import {Component, Input,  Output, EventEmitter, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-filters',
  imports: [CommonModule],
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class FiltersComponent {
  @Input() job: any;
  @Output() positionSelected = new EventEmitter<string>();


  handleClick(): void {
    this.positionSelected.emit(this.job.position);
    console.log(this.job.position)
  }

}
