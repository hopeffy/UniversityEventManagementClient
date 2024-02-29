import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { provideNativeDateAdapter } from '@angular/material/core';
import { Events } from '../../../interfaces/Events';
import { PersonService } from '../../../services/person.service';
import { People, Person } from '../../../interfaces/Person';
import { EventService } from '../../../services/event.service';

@Component({
  selector: 'app-event-update-dialog',
  templateUrl: './event-update-dialog.component.html',
  styleUrl: './event-update-dialog.component.css',
  providers: [provideNativeDateAdapter(), EventService],
})
export class EventUpdateDialogComponent {
  date = new FormControl(new Date());
  currentDate = new Date();
  people : Person[] = [];

  event : Events = {
    name: "",
    id: '',
    start_date: this.currentDate,
    end_date: this.currentDate,
    status: '',
    location: '',
    organizerId: '',
    description: ''
  }
  constructor(private personService : PersonService,
    private eventService : EventService) {
    this.eventService.getEventById(this.event.id).subscribe(
      {
        next : (response) => {
          if (response != undefined) {
            this.event = response;
          }
        },
        error : (error) => {
          console.log("not found any event.");
          
        }
      }
    )
  }

  ngOnInit() {
    this.getOrganizer();
    
  }

  getOrganizer() {
    this.personService.getAllPeople().subscribe({
      next: (response) => {
        if(response != undefined) {
          this.people = response;
        }
      },
      error : (error) => {
        console.log("not found any people");
        
      }
    });
    
}

    
}
