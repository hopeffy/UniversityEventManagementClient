import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { provideNativeDateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-person-create-dialog',
  templateUrl: './person-create-dialog.component.html',
  styleUrl: './person-create-dialog.component.css',
  providers: [provideNativeDateAdapter()],
})
export class PersonCreateDialogComponent {
  eventName : string = "Person adı";
  date = new FormControl(new Date());
}
