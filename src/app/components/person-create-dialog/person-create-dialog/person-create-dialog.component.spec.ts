import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonCreateDialogComponent } from './person-create-dialog.component';

describe('PersonCreateDialogComponent', () => {
  let component: PersonCreateDialogComponent;
  let fixture: ComponentFixture<PersonCreateDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PersonCreateDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PersonCreateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
