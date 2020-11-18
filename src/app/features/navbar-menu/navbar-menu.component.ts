import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'spa-navbar-menu',
  templateUrl: './navbar-menu.component.html',
  styleUrls: ['./navbar-menu.component.css']
})
export class NavbarMenuComponent implements OnInit {
  lang: string = "PT";
  @Output() changeLangEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  changeLanguage(event) {
    this.lang = event.target.innerText;
    this.changeLangEvent.emit(this.lang);
  }
}
