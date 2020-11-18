import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { TextTranslationService } from '../shared/text-translation.service';

@Component({
  selector: 'spa-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Input() lang: string;

  // language: string = "PT";

  // isAbout: boolean = false;
  // isContact: boolean = false;
  // isLanding: boolean = true;

  txtLanding: string;

  constructor(private txttranslationservice: TextTranslationService) { }

  ngOnInit(): void {
    this.changeTxtLanding();
  }
  
  ngOnChanges(changes: SimpleChanges) {
    console.log(this.lang);
    this.changeTxtLanding();
  }

  // setLanguage(newLang: string) {
  //   this.language = newLang;
  //   this.changeTxtLanding();
  // }

  changeTxtLanding() {
    if (this.lang === 'PT') {
      this.txtLanding = dataTexts.PT.landing.title;
    } else if (this.lang === 'EN') {
      this.txtLanding = dataTexts.EN.landing.title;
    } else {
      this.txtLanding = dataTexts.IT.landing.title;
    }
  }
}
