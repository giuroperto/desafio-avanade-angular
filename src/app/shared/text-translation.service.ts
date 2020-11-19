import { Injectable } from '@angular/core';
import { data } from './all-texts.js';

@Injectable({
  providedIn: 'root'
})
export class TextTranslationService {

  constructor() { }

  // testing functionality
  test: string = "hello world";
  // ----------------------------------

  lang: string = "PT";
  translationData: Object = {
    EN: {
      landing: {
        title: "Welcome to my first Angular web app!!!",
        text: ""
      },
      contact: {
        title: "Let's get in touch...",
        text: "Here is where you can find me most of the time..."
      },
      about: {
        title: "",
        text: ""
      },
      navbar: {
        categories: ["whoami", "contact me"]
      }
    },
    PT: {
      landing: {
        title: "Bem-vindos à minha primeira web app em Angular!!!",
        text: ""
      },
      contact: {
        title: "Vamos conversar?",
        text: "Onde você pode me achar na maior parte do tempo...",
      },
      about: {
        title: "",
        text: ""
      },
      navbar: {
        categories: ["whoami", "contate-me"]
      }
    },
    IT: {
      landing: {
        title: "Benvenuti alla mia prima applicazione web in Angular!!!",
        text: ""
      },
      contact: {
        title: "Facciamo due chiacchiere?",
        text: "Qua ci sono i link di dove trovarmi per la maggior parte del tempo..."
      },
      about: {
        title: "",
        text: ""
      },
      navbar: {
        categories: ["whoami", "contattami"]
      }
    }
  };

  // testing functionality
  getTest() {
    return this.test;
  }
  // ----------------------------------

  getLanguage() {
    return this.lang;
  } 

  updateLanguage(language) {
    console.log(language);
    this.lang = language;
    console.log(this.lang);
  }

  getData() {
    return this.translationData;
  }

}
