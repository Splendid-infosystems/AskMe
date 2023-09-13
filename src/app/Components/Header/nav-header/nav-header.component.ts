import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nav-header',
  templateUrl: './nav-header.component.html',
  styleUrls: ['./nav-header.component.css']
})
export class NavHeaderComponent implements OnInit {
  isHomeActive: boolean = true;
  currentUrlArray: string[] = [];
  currentUrl: string = ''; // Store the current URL here

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Get the current URL from the router's URL tree
        this.currentUrl = this.router.url;
        // console.log(this.currentUrl);
        // this.currentUrlArray = this.currentUrl.split('/');
        // this.currentUrl=this.currentUrlArray[1]
        // console.log(this.currentUrl.split('/'))
      }
    });
  }
}
