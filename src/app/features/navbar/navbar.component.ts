import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TextTranslationService } from '../../shared/text-translation.service';

@Component({
  selector: 'spa-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  lang: string;
  error: any;
  categories: Array<string>;

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
    this.categories = this.textTranslationService.getData()[this.lang].navbar.categories;
    console.log(this.categories);
  }
}
