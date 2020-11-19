import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'spa-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  chosenLanguage: string;
  categories: Array<string> = ["whoami", "contact me"];

  @Output() updateLangEvent = new EventEmitter<string>();
  @Input() catTranslation: Object;

  constructor() { }

  ngOnInit(): void {
    this.updateContent();
  }

  changePageLanguage(lang: string) {
    this.chosenLanguage = lang;
    this.updateLang();
    this.updateContent();
  }

  updateLang() {
    this.updateLangEvent.emit(this.chosenLanguage);
  }

  updateContent() {
    this.categories = this.catTranslation[this.chosenLanguage].navbar.categories;
  }
}
