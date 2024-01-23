import { Component, ViewChild } from '@angular/core';
import { NavbarComponent } from '../../../components/navbar/navbar/navbar.component';
import { Events } from '../../../interfaces/Events';
import { provideNativeDateAdapter } from '@angular/material/core';
import { FormControl } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { EventCreateDialogComponent } from '../../../components/event-create-dialog/event-create-dialog/event-create-dialog.component';
import { MatTable } from '@angular/material/table';
import { EventUpdateDialogComponent } from '../../../components/event-update-dialog/event-update-dialog/event-update-dialog.component';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrl: './events.component.css',
  providers: [provideNativeDateAdapter()],
})

export class EventsComponent {
  @ViewChild(MatTable) table: MatTable<Events> | undefined;

  date = new FormControl(new Date());


  constructor(
    private createDialog: MatDialog,
    private dialogRef: MatDialogRef<EventCreateDialogComponent>,
    private dialogRefUpdate: MatDialogRef<EventUpdateDialogComponent>,
    private updateDialog : MatDialog
  ) {
    
  }

  openDialog() {
    const dialog = this.createDialog.open(EventCreateDialogComponent , { data: { table: this.table }} );
    dialog.afterClosed().subscribe((response) => {
      
    });
  }

  openEvent() {
    const dialog = this.updateDialog.open(EventUpdateDialogComponent, { data : {table : this.table} ,  maxHeight: '80%'});
  }
}
