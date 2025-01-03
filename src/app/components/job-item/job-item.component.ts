import { Component } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import  {CommonModule} from '@angular/common';
import { Input,  Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-job-item',
  imports: [CommonModule],
  templateUrl: './job-item.component.html',
  styleUrl: './job-item.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JobItemComponent {
  @Input() job: any;

}
