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
  @ViewChild(MatTable) table: MatTable<Events> | undefined;
  currentDate = new Date();
  currentDate2 = new Date();
  date = new FormControl(new Date());
  events : Events[] = [];
  filterEvents : any[] = [];
  searchTerm = "";
  isActive: boolean = true;

  eventObj : Partial<Events> =  {
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
    private createDialog: MatDialog,
    private dialogRef: MatDialogRef<EventCreateDialogComponent>,
    private dialogRefUpdate: MatDialogRef<EventUpdateDialogComponent>,
    private updateDialog : MatDialog,
    private eventService : EventService
  ) {
    
  }

  ngOnInit() {
    this.getAllEvents();
  }

  openDialog() {
    const dialog = this.createDialog.open(EventCreateDialogComponent , { data: { table: this.table }} );
    dialog.afterClosed().subscribe((response) => {
      this.getAllEvents();
    });
  }

  openEvent(id : string) {
    const dialog = this.updateDialog.open(EventUpdateDialogComponent, { data : {table : this.table} ,  maxHeight: '80%'});
    console.log(id);
    this.eventService.getEventById(id).subscribe({
      next: (res) => {
        console.log("succesful");
        if(res != undefined) {
          this.eventObj = res;
          
          
        }
      },
      error : (error) => {
        console.log("not found any people");
        
      }
    });
    
  }

  getAllEvents() {
    debugger
    this.eventService.getAllEvent().subscribe({
      next: (response) => {
        console.log("succesful");
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
