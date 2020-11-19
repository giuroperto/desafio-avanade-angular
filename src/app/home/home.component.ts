import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { TextTranslationService } from '../shared/text-translation.service';

@Component({
  selector: 'spa-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  lang: string;
  error: any;
  isText: boolean = false;
  titleLanding: string;
  txtLanding: string;

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
    this.titleLanding = this.textTranslationService.getData()[this.lang].landing.title;
    this.txtLanding = this.textTranslationService.getData()[this.lang].landing.text;

    if (this.txtLanding !== '') {
      this.isText = true;
    }
    console.log(this.titleLanding);
    console.log(this.txtLanding);
  }
}
