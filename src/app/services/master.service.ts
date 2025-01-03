import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JobsList } from '../model/Job'; '../model/Job';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

 jsonUrl: string = 'http://localhost:5000/jobs'
  constructor(private http:HttpClient) { }

  getAllJobs(): Observable<JobsList[]>{
    return this.http.get<JobsList[]>(this.jsonUrl);
  }
}
