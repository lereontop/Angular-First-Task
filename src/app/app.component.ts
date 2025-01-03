import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FiltersComponent } from './components/filters/filters.component';
import { JobListComponent } from './components/job-list/job-list.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent,JobListComponent, FiltersComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'JobListings';
}
