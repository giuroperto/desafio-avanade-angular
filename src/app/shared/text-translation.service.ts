import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TextTranslationService {

  constructor() { }

  private langBehaviourSubj = new BehaviorSubject<string>('PT');

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
        title: "Hi, I'm Giulia! Nice to meet you.",
        text: "I have a degree in Business but lately I've discovered my passion for programming... I'm a full-stack web developer (MERN stack) currently learning about the Angular framework.",
        categories: [{
          name: "About",
          text: "",
        }, {
          name: "Professional Experiences",
          text: [],
        }, {
          name: "Education",
          text: ["Business - FGV EAESP", "Semester Abroad - University of Otago (NZ)", "Msc International Events and Festival Management - Edinburgh Napier University (UK)", "Full-Stack Web Dev Bootcamp - Ironhack (SP)", "Cadet - 42SP"],
        }, {
          name: "Curiosities",
          btn: "Generate a curiosity",
        }],
        curiosities: ["I've been a vegetarian for over 10 years", "I'm really bad at lying, I will always end a lie with a laugh. Btw, when I play AMONG US I always feel bad when I'm the impostor.", "My first contact with the Internet was when I was little and my parents would let me play kids games online. But I've only realised its real power when I came accross my first Tomb Raider's walkthrough. lol"],
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
        title: "Oi, eu sou a Giulia!",
        text: "Sou administradora de formação e full-stack de coração (MERN stack, agora aprendendo Angular)",
        categories: [{
          name: "Sobre",
          text: "",
        }, {
          name: "Experiências Profissionais",
          text: [],
        }, {
          name: "Educação",
          text: ["Administração - FGV EAESP", "Intercâmbio - University of Otago (NZ)", "Mestrado em Gestão de Eventos Internacionais e Festivais - Edinburgh Napier University (UK)", "Full-Stack Web Dev Bootcamp - Ironhack (SP)", "Cadete - 42SP"],
        }, {
          name: "Curiosidades",
          btn: "Gerar uma curiosidade",
        }],
        curiosities: ["Passei boa parte da minha infância vivendo em uma chácara no interior de São Paulo, passava mais tempo brincando com meus cachorros que com meus amigos.", "Tenho uma preocupação enorme com a destinação do lixo e quando morei em Tirana (Albânia), convenci as pessoas que compartilhavam a casa comigo a separar o lixo reciclável e um dia peguei o ônibus com as sacolas de lixo só para ir até a única lixeira na cidade que tinha a separação dos recicláveis.", "Sou do signo de Peixes com ascendente em Peixes. Quem manja de horóscopo entende bem como eu sou... hahaha."],
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
        title: "Ciao, sono Giulia! Molto lieta.",
        text: "",
        categories: [{
          name: "Sobre",
          text: "",
        }, {
          name: "Experiências Profissionais",
          text: [],
        }, {
          name: "Educação",
          text: [],
        }, {
          name: "Curiosidades",
          btn: "Generate a curiosity",
        }],
        curiosities: ["Quando ero piccola studiavo in una scuola giapponesa dove ho imparato il giapponese. Purtroppo, attualmente non mi ricordo più.", "Ma mi piace davvero tanto mangiare che mai riesco a fare la dieta.", "Sono stata a Christchurch (Nuova Zelanda) dopo il grande terremoto di 2011 ed ho sentito il 'aftershock': sono stata svegliata nella mattina con un tremore di 5.3"],
      },
      navbar: {
        categories: ["whoami", "contattami"]
      }
    }
  };

  public getLanguage() {
    return this.langBehaviourSubj;
  } 

  public updateLanguage(language: string) {
    console.log(language);
    this.langBehaviourSubj.next(language);
    console.log(this.langBehaviourSubj);
  }

  public getData() {
    return this.translationData;
  }

}
