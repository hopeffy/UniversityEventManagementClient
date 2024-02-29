import { Component, ViewChild } from '@angular/core';
import { NavbarComponent } from '../../../components/navbar/navbar/navbar.component';
import { Events } from '../../../interfaces/Events';
import { provideNativeDateAdapter } from '@angular/material/core';
import { FormControl } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { EventCreateDialogComponent } from '../../../components/event-create-dialog/event-create-dialog/event-create-dialog.component';
import { MatTable } from '@angular/material/table';
import { EventUpdateDialogComponent } from '../../../components/event-update-dialog/event-update-dialog/event-update-dialog.component';
import { EventService } from '../../../services/event.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrl: './events.component.css',
  providers: [provideNativeDateAdapter()],
})

export class EventsComponent {
  currentDate = new Date();
  currentDate2 = new Date();
  date = new FormControl(new Date());
  events : Events[] = [];
  filterEvents : any[] = [];
  searchTerm = "";
  isActive: boolean = true;

  eventObj : Events = {
    id: '',
    name: '',
    start_date: this.currentDate,
    end_date: this.currentDate,
    status: '',
    location: '',
    organizerId: '',
    description: ''
  } 

  constructor(
    private createDialog: MatDialog,
    private dialogRef: MatDialogRef<EventCreateDialogComponent>,
    private dialogRefUpdate: MatDialogRef<EventUpdateDialogComponent>,
    private updateDialog : MatDialog,
    private eventService : EventService
  ) {
    this.getAllEvents();
  }



  openDialog() {
    const dialog = this.createDialog.open(EventCreateDialogComponent );
    dialog.afterClosed().subscribe((response) => {
      this.getAllEvents();
    });
  }

  openEvent(id : string) {
    debugger
    const dialog = this.updateDialog.open(EventUpdateDialogComponent, { maxHeight: '80%'});

    this.eventService.getEventById(id).subscribe({
      next: (res) => {
        
        if(res != undefined) {
          this.eventObj = res;
          console.log(this.eventObj);
          
          
        }
      },
      error : (error) => {
        console.log("not found any event.");
        
      }
    });

    dialog.afterClosed().subscribe(res => {
      
      console.log(this.eventObj);
      
    });

    
    
  }

  getAllEvents() {
    this.eventService.getAllEvent().subscribe({
      next: (response) => {
        if(response != undefined) {
          this.events = response;
          
        }
      },
      error : (error) => {
        console.log("not found any people");
        
      }
    });
    
  }
}
