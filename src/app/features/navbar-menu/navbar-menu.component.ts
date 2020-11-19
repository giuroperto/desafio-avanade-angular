import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TextTranslationService } from '../../shared/text-translation.service';

@Component({
  selector: 'spa-navbar-menu',
  templateUrl: './navbar-menu.component.html',
  styleUrls: ['./navbar-menu.component.css']
})
export class NavbarMenuComponent implements OnInit {
  lang: string = "PT";
  // @Output() changeLangEvent = new EventEmitter<string>();

  constructor(private textTranslationService: TextTranslationService) { }

  ngOnInit(): void {
  }

  changeLanguage(event) {
    this.lang = event.target.innerText;
    this.textTranslationService.updateLanguage(this.lang);
  }

  // changeLanguage(event) {
  //   this.lang = event.target.innerText;
  //   this.changeLangEvent.emit(this.lang);
  // }
}
