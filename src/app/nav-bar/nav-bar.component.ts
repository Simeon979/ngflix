import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  searchTerm: string

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSearchSubmit() {
    const navigationExtra: NavigationExtras = {
      queryParams: {"q": this.searchTerm}
    }
    this.router.navigate(["movies/search"], navigationExtra)
    this.searchTerm = ""
  }

}
