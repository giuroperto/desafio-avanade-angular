import { Component } from '@angular/core';
import dataTexts from './shared/all-texts.js';

@Component({
  selector: 'spa-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'desafioAvanade';

  language: string = "PT";
  textTranslation: Object = dataTexts;

  updateLanguage(newLang: string) {
    console.log(this.language);
    this.language = newLang;
  }

}
