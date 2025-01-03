import { JobsList } from './../../model/Job';
import { Component, inject, OnInit, signal } from '@angular/core';
import { JobItemComponent } from '../job-item/job-item.component';
import { MasterService } from '../../services/master.service';
import {CommonModule} from '@angular/common';
import { Input,  Output, EventEmitter } from '@angular/core';
import { FiltersComponent } from '../filters/filters.component';

@Component({
  selector: 'app-job-list',
  imports: [JobItemComponent, CommonModule,FiltersComponent],
  templateUrl: './job-list.component.html',
  styleUrl: './job-list.component.css'
})
export class JobListComponent implements OnInit {
  constructor() { }



jobList = signal<JobsList[]>([]);
masterService = inject(MasterService);
@Input() job: any;

  ngOnInit(): void {
    this.loadAllJob();
  }


  loadAllJob(){
    this.masterService.getAllJobs().subscribe((data)=>{
      this.jobList.set(data);
    });
  }

  filteredJobs = [...this.jobList()];

  filterJobsByPosition(position: string): void {
    this.filteredJobs = this.jobList().filter(job => job.position === position);
  }


}
