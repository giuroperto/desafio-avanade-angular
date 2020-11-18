import { Component } from '@angular/core';
import dataTexts from './shared/all-texts.js';
import { TextTranslationService } from './shared/text-translation.service';

@Component({
  selector: 'spa-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'desafioAvanade';

  language: string = "PT";

  updateLanguage(newLang: string) {
    console.log(dataTexts);
    console.log(TextTranslationService); 
    console.log(this.language);
    this.language = newLang;
  }

}
