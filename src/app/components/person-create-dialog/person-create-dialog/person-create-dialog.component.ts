import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { provideNativeDateAdapter } from '@angular/material/core';
import { Person } from '../../../interfaces/Person';
import { PersonService } from '../../../services/person.service';

@Component({
  selector: 'app-person-create-dialog',
  templateUrl: './person-create-dialog.component.html',
  styleUrl: './person-create-dialog.component.css',
  providers: [provideNativeDateAdapter()],
})
export class PersonCreateDialogComponent {
  eventName : string = "Person adı";
  date = new FormControl(new Date());

  person : Person = {
    name: '',
    surname: '',
    role: '',
    createdTime: new Date()
  };

  constructor(private personService : PersonService) {

  }

  createPeople() {
    debugger
    this.personService.addPeople(this.person).subscribe({
      next: (response) => {
        console.log("succesful");
        
        console.log(response);
      },
      error : (error) => {

      }
    });
  }
}
