import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { provideNativeDateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-person-update-dialog',
  templateUrl: './person-update-dialog.component.html',
  styleUrl: './person-update-dialog.component.css',
  providers: [provideNativeDateAdapter()],
})
export class PersonUpdateDialogComponent {
  eventName : string = "Person adı";
  date = new FormControl(new Date());
}
