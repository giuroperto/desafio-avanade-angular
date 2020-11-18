import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'spa-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  language: string = "PT";
  // isAbout: boolean = false;
  // isContact: boolean = false;
  // isLanding: boolean = true;
  txtLanding: string;
  txtEN: string = "Welcome to my first Angular web app!!!";
  txtIT: string = "Benvenuti alla mia prima applicazione web in Angular!!!";
  txtPT: string = "Bem-vindos à minha primeira web app em Angular!!!";

  constructor() { }

  ngOnInit(): void {
    this.changeTxtLanding();
  }

  setLanguage(newLang: string) {
    this.language = newLang;
    this.changeTxtLanding();
  }

  // changeContent(content: string) {
  //   console.log(content);
  //   if (content === "about") {
  //     this.isAbout = true;
  //     this.isContact = false;
  //     this.isLanding = false;
  //   } else if (content === "contact") {
  //     this.isContact = true;
  //     this.isAbout = false;
  //     this.isLanding = false;
  //   } else {
  //     this.isAbout = false;
  //     this.isContact = false;
  //     this.isLanding = true;
  //   }
  // }

  changeTxtLanding() {
    if (this.language === 'PT') {
      this.txtLanding = this.txtPT;
    } else if (this.language === 'EN') {
      this.txtLanding = this.txtEN;
    } else {
      this.txtLanding = this.txtIT;
    }
  }
}
