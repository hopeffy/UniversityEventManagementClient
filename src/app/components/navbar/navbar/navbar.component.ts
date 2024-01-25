import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { EventsComponent } from '../../../pages/events/events/events.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

    constructor(
      private router : Router) {

    }

    routerToEventsPage() {
    this.router.navigate(['events']);
  }
  routerToPersonPage() {
    this.router.navigate(['person']);
  }


}
