import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { provideNativeDateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-event-create-dialog',
  templateUrl: './event-create-dialog.component.html',
  styleUrl: './event-create-dialog.component.css',
  providers: [provideNativeDateAdapter()],

})
export class EventCreateDialogComponent {
    eventName : string = "Event adı";
    date = new FormControl(new Date());

}
