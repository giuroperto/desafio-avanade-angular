import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'spa-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  @Input() lang: string;

  contactText: string;
  contactTitle: string;

  titleEN: string = "Let's get in touch...";
  titlePT: string = 'Vamos conversar?';
  titleIT: string = 'Facciamo due chiacchiere?';
  textEN: string = 'Here is where you can find me most of the time...';
  textPT: string = 'Onde você pode me achar na maior parte do tempo...';
  textIT: string = 'Qua ci sono i link di dove trovarmi per la maggior parte del tempo...';

  constructor() { }

  ngOnInit(): void {
    this.changeTxtContact();
  }
  
  ngOnChanges() {
    this.changeTxtContact();
  }

  changeTxtContact() {
    if (this.lang === 'PT') {
      this.contactText = this.textPT;
      this.contactTitle = this.titlePT;
    } else if (this.lang === 'EN') {
      this.contactText = this.textEN;
      this.contactTitle = this.titleEN;
    } else {
      this.contactText = this.textIT;
      this.contactTitle = this.titleIT;
    }
  }

}
