import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { provideNativeDateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-event-update-dialog',
  templateUrl: './event-update-dialog.component.html',
  styleUrl: './event-update-dialog.component.css',
  providers: [provideNativeDateAdapter()],
})
export class EventUpdateDialogComponent {
  eventName : string = "Event adı";
  date = new FormControl(new Date());
}
