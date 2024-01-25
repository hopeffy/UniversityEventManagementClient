import { Component, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { PersonCreateDialogComponent } from '../../../components/person-create-dialog/person-create-dialog/person-create-dialog.component';
import { PersonUpdateDialogComponent } from '../../../components/person-update-dialog/person-update-dialog/person-update-dialog.component';
import { People, Person } from '../../../interfaces/Person';
import { provideNativeDateAdapter } from '@angular/material/core';
import { PersonService } from '../../../services/person.service';


@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrl: './person.component.css',
  providers: [provideNativeDateAdapter()],
})
export class PersonComponent {
  @ViewChild(MatTable) table: MatTable<Person> | undefined;
  selected = 'student';

  date = new FormControl(new Date());
  people : any[] = [];
  personObj : Partial<Person> = {
    name: '',
    surname: '',
    role: '',
    createdTime: new Date()
  }
  

  constructor(
    private createDialog: MatDialog,
    private dialogRef: MatDialogRef<PersonCreateDialogComponent>,
    private dialogRefUpdate: MatDialogRef<PersonUpdateDialogComponent>,
    private updateDialog : MatDialog,
    private personService : PersonService
  ) {
    
  }

  ngOnInit() {
    this.getAllPeople();
  }

  openDialog() {
    const dialog = this.createDialog.open(PersonCreateDialogComponent , { data: { table: this.table }} );
    dialog.afterClosed().subscribe((response) => {
      this.getAllPeople();
    });
  }

  getAllPeople() {
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

  openPersonInfo(id : string) {
    console.log(id);
    this.personService.getPeopleById(id).subscribe({
      next: (response) => {
        console.log("succesful");
        if(response != undefined) {
          this.personObj = response;
          console.log(this.personObj);
          
        }
      },
      error : (error) => {
        console.log("not found any people");
        
      }
    });
    
  }
}
