import { Component, OnInit } from '@angular/core';
import { TextTranslationService } from '../shared/text-translation.service';

@Component({
  selector: 'spa-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  lang: string;
  error: any;
  contactTitle: string;
  contactText: string;
  isText: boolean = false;

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
    this.contactTitle = this.textTranslationService.getData()[this.lang].contact.title;
    this.contactText = this.textTranslationService.getData()[this.lang].contact.text;

    if (this.contactText !== '') {
      this.isText = true;
    }

    console.log(this.contactTitle);
    console.log(this.contactText);
  }
}
