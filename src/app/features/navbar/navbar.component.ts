import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'spa-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  chosenLanguage: string;
  @Output() updateLangEvent = new EventEmitter<string>();
  // @Output() updateContentEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  changePageLanguage(lang: string) {
    this.chosenLanguage = lang;
    this.updateLang();
  }

  updateLang() {
    this.updateLangEvent.emit(this.chosenLanguage);
  }

  // updateContent(event) {
  //   console.log(event.target.innerText);
  //   if (event.target.innerText === "whoami") {
  //     this.updateContentEvent.emit("about");
  //   } else {
  //     this.updateContentEvent.emit("contact");
  //   }
  // }
}
