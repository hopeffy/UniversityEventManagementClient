import { Component, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { PersonCreateDialogComponent } from '../../../components/person-create-dialog/person-create-dialog/person-create-dialog.component';
import { PersonUpdateDialogComponent } from '../../../components/person-update-dialog/person-update-dialog/person-update-dialog.component';
import { Person } from '../../../interfaces/Person';
import { provideNativeDateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrl: './person.component.css',
  providers: [provideNativeDateAdapter()],
})
export class PersonComponent {
  @ViewChild(MatTable) table: MatTable<Person> | undefined;

  date = new FormControl(new Date());

  constructor(
    private createDialog: MatDialog,
    private dialogRef: MatDialogRef<PersonCreateDialogComponent>,
    private dialogRefUpdate: MatDialogRef<PersonUpdateDialogComponent>,
    private updateDialog : MatDialog
  ) {
    
  }

  openDialog() {
    const dialog = this.createDialog.open(PersonCreateDialogComponent , { data: { table: this.table }} );
    dialog.afterClosed().subscribe((response) => {
      
    });
  }

  
}
