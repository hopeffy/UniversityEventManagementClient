import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { provideNativeDateAdapter } from '@angular/material/core';
import { EventService } from '../../../services/event.service';
import { Events } from '../../../interfaces/Events';
import { Person } from '../../../interfaces/Person';
import { PersonService } from '../../../services/person.service';

@Component({
  selector: 'app-event-create-dialog',
  templateUrl: './event-create-dialog.component.html',
  styleUrl: './event-create-dialog.component.css',
  providers: [provideNativeDateAdapter()],

})
export class EventCreateDialogComponent {
  people : any[] = [];
  currentDate: Date | undefined = undefined;
  currentDate2: Date | undefined = undefined;

  personObj : Person = {
    id: '',
    name: '',
    surname: '',
    role: '',
    createdTime: new Date()
  }
  
  eventObj : Events =  {
    name : "",
    id: '',
    start_date : this.currentDate,
    end_date : this.currentDate2,
    status: 'available',
    location: 'turkey',
    organizerId: '',
    description: ''
  }


  

  constructor(
    private eventServices : EventService,
    private personService : PersonService
  ) {

  }
    eventName : string = "Event adı";
    date = new FormControl(new Date());


    ngOnInit() {
      this.getOrganizer();

    }


    
  createEvent() {
    debugger
    this.eventServices.addEvent(this.eventObj).subscribe({
      next: (response) => {
        console.log("succesful");
        console.log(response);
      },
      error : (error) => {

      }
    });
  }

  getOrganizer() {
      this.personService.getAllPeople().subscribe({
        next: (response) => {
          console.log("succesful");
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
