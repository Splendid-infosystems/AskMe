import { Component } from '@angular/core';

@Component({
  selector: 'app-body-parent-module',
  templateUrl: './body-parent-module.component.html',
  styleUrls: ['./body-parent-module.component.css']
})
export class BodyParentModuleComponent {
  names: string[] = ['Restaurants', 'Hotels', 'Beauty Spa', 'Home Decor']; // Add more names as needed
  currentNameIndex = 0;
  currentName = this.names[this.currentNameIndex];


  constructor() { }

  ngOnInit(): void {
    this.startNameChangeInterval();
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
