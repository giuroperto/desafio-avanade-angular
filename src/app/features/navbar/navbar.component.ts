import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Lang } from 'src/app/shared/models/lang.model';
import { TextTranslationService } from '../../shared/text-translation.service';

@Component({
  selector: 'spa-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  lang: Lang;
  error: any;
  categories: Array<string>;

  // @Output() updateLangEvent = new EventEmitter<string>();
  // @Input() catTranslation: Object;

  constructor(private textTranslationService: TextTranslationService) { }

  ngOnInit(): void {
    this.getLang();
    // this.getContent();
  }
  
  // ngOnChange() {
  //   this.getLang();
  //   this.getContent();
  // }
  
  ngOnChange() {
    console.log(this.lang);
  }

  getLang() {
    this.textTranslationService.getLanguage().subscribe(
      (data: any) => {
        this.lang = data;
        console.log(data);
      }, error => {
        this.error = error;
      });
  }

  // getContent() {
  //   this.categories = this.textTranslationService.getData()[this.lang].navbar.categories;
  //   console.log(this.categories);
  //   // console.log(this.textTranslationService.getData()[this.lang].navbar.categories);
  // }

  // updateContent() {
  //   this.categories = this.catTranslation[this.chosenLanguage].navbar.categories;
  // }
}
