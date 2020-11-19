import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { TextTranslationService } from '../shared/text-translation.service';

@Component({
  selector: 'spa-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Input() lang: string = "PT";
  @Input() contentTranslation: Object;

  isText: boolean = false;
  titleLanding: string;
  txtLanding: string;

  constructor(private textTranslationService: TextTranslationService) { }

  ngOnInit(): void {
    console.log(this.textTranslationService.getData());
    this.updateContent();
    // this.changeTxtLanding();
  }

  updateContent() {
    console.log(this.lang);
    console.log(this.contentTranslation);
    console.log(this.contentTranslation[this.lang].landing);
    this.titleLanding = this.contentTranslation[this.lang].landing.title;
    this.txtLanding = this.contentTranslation[this.lang].landing.text;
  }
  
  // ngOnChanges(changes: SimpleChanges) {
  //   console.log(this.lang);
    // this.changeTxtLanding();
  // }

  // setLanguage(newLang: string) {
  //   this.language = newLang;
  //   this.changeTxtLanding();
  // }

  // changeTxtLanding() {
  //   if (this.lang === 'PT') {
  //     this.txtLanding = dataTexts.PT.landing.title;
  //   } else if (this.lang === 'EN') {
  //     this.txtLanding = dataTexts.EN.landing.title;
  //   } else {
  //     this.txtLanding = dataTexts.IT.landing.title;
  //   }
  // }
}
