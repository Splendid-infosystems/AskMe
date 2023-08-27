import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-body-parent-module',
  templateUrl: './body-parent-module.component.html',
  styleUrls: ['./body-parent-module.component.css']
})
export class BodyParentModuleComponent {
  names: string[] = ['Restaurants', 'Hotels', 'Beauty Spa', 'Home Decor']; // Add more names as needed
  currentNameIndex = 0;
  currentName = this.names[this.currentNameIndex];

  isAllDoctorsActive: boolean = false;
  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isAllDoctorsActive = this.router.isActive('/AllDoctors', true);
      }
    });
  }

  startNameChangeInterval() {
    setInterval(() => {
      this.changeName();
    }, 10000); // Change name every 10 seconds
  }

  changeName() {
    this.currentNameIndex = (this.currentNameIndex + 1) % this.names.length;
    this.currentName = this.names[this.currentNameIndex];
  }
}
