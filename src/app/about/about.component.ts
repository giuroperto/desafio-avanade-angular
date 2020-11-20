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

  aboutCategories: Array<string>;
  aboutCatCuriosities: Array<Object>;
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
    this.aboutCategories = this.textTranslationService.getData()[this.lang].about.categories;
    this.aboutCuriosities = this.textTranslationService.getData()[this.lang].about.curiosities;
    
    this.aboutCatCuriosities = this.textTranslationService.getData()[this.lang].about.curiosities[3];
    this.buttonTxt = this.textTranslationService.getData()[this.lang].about.categories[3].btn;



    // if (this.contactText !== '') {
    //   this.isText = true;
    // }
  }

  getRandomCuriosity() {
    this.arrayLength = this.aboutCuriosities.length;
    this.randomPosition = Math.floor(Math.random()*this.arrayLength);
    this.randomCuriosity = this.aboutCuriosities[this.randomPosition];
    this.hasCuriosity = true;

    console.log(this.randomCuriosity);
    console.log(this.randomPosition);
  }

}

//   isText: boolean = false;


