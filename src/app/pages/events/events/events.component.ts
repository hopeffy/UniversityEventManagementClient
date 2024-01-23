import { Component } from '@angular/core';
import { NavbarComponent } from '../../../components/navbar/navbar/navbar.component';
import { Events } from '../../../interfaces/Events';
import { provideNativeDateAdapter } from '@angular/material/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrl: './events.component.css',
  providers: [provideNativeDateAdapter()],
})
export class EventsComponent {
  date = new FormControl(new Date());


  constructor() {
    
  }
  
}
