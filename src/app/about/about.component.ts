import { Component, OnInit } from '@angular/core';
import { TextTranslationService } from '../shared/text-translation.service';

@Component({
  selector: 'spa-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent implements OnInit {
  lang: string;
  error: any;
  aboutTitle: string;
  aboutText: string;
  buttonTxt: string;

  aboutCategories: Array<string> = [];
  aboutCategoriesTexts = [];
  aboutCuriosities: Array<string>;

  randomPosition: number;
  arrayLength: number;
  randomCuriosity: string;
  hasCuriosity: boolean = false;

  constructor(private textTranslationService: TextTranslationService) { }

  ngOnInit(): void {
    this.getLang();
    this.getContent();
  }

  getLang() {
    this.textTranslationService.getLanguage().subscribe(
      (data: string) => {
        this.lang = data;
        console.log(data);
        this.getContent();
      }, error => {
        this.error = error;
      });
  }

  getContent() {
    this.aboutTitle = this.textTranslationService.getData()[this.lang].about.title;
    this.aboutText = this.textTranslationService.getData()[this.lang].about.text;
    this.aboutCuriosities = this.textTranslationService.getData()[this.lang].about.curiosities;

    this.aboutCategories = [];
    this.aboutCategoriesTexts = [];
    
    for (let i = 0; i <= 3; i += 1) {
      this.aboutCategories.push(this.textTranslationService.getData()[this.lang].about.categories[i].name)
      if (i < 3) {
        this.aboutCategoriesTexts.push(this.textTranslationService.getData()[this.lang].about.categories[i].text)
      }
    }

    this.buttonTxt = this.textTranslationService.getData()[this.lang].about.categories[3].btn;
  }

  getRandomCuriosity() {
    this.arrayLength = this.aboutCuriosities.length;
    this.randomPosition = Math.floor(Math.random()*this.arrayLength);
    this.randomCuriosity = this.aboutCuriosities[this.randomPosition];
    this.hasCuriosity = true;
  }

}
