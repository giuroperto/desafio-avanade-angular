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
          text: ["After my last job in a multinational, I wasn't quite satisfied with my career and so I've decided to quit my job and try something new... That's when I started studying programming. I have people in my family that work with IT, and they advised me to take a FreeCodeCamp course just to make sure that it was what I really wanted to do. And, to my surprise, I got really into everything I've learned there. Then, I've decided to spend a little bit more time and money in my education and I've started a Full-Stack Web Development bootcamp at Ironhack. At the same time, I've taken part in the École 42's Piscine where I've learned a little bit of C language. Each day I'd fall in love even more with this area and I'd spend hours studying and practicing new concepts, but for me it was quite a pleasure to do so. However, with the pandemic my plans were changed and that's when I started looking for a job in this field. I've started slowly, after all I still needed to help my family to keep their business running. Looking on the bright side, though, we had to reinvent ourselves and adopt new technologies and processes to adapt to this new reality. I've played an active role in all this process, helping to develop new tools such as an online menu and a web page to search for products and prices."],
        }, {
          name: "Professional Experiences",
          text: ["Marketing Trainee", "Revenue Management Analyst", "Pricing & Revenue Management Analyst", "Manager & IT support"],
        }, {
          name: "Education",
          text: ["Bachelor in Business", "Semester Abroad", "Msc International Events and Festival Management", "Full-Stack Web Dev Bootcamp", "Cadet"],
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
          text: ["Depois de meu último trabalho em uma multinacional, eu estava insatisfeita com a carreira que eu vinha estabelecendo e resolvi sair da empresa para tentar algo novo... Foi aí que comecei a estudar programação. Conversando com familiares meus que atuam na área da TI, me indicaram o curso do FreeCodeCamp para eu ver se era aquilo mesmo que eu queria, e para a minha surpresa, eu me encantei com tudo que eu aprendi! Resolvi investir mais tempo e dinheiro nessa minha formação e fiz um bootcamp de Full-Stack Web Developer na Ironhack, e no mesmo período participei da Piscina da École 42 (processo seletivo) onde tive contato com a linguagem em C. A cada dia me apaixonava mais, passava horas estudando e praticando e eram horas prazerosas para mim. Porém, meus planos sofreram uma reviravolta com a pandemia, e foi quando eu resolvi procurar emprego na área. Comecei devagar, afinal eu também tinha uma responsabilidade em auxiliar a continuidade dos negócios de minha família. O lado positivo dessa situação toda é que tivemos que incentivar uma revolução tecnológica, assim como muitos outros negócios, para conseguirmos nos adaptar a essa nova realidade. Participei ativamente de todo esse processo e auxiliei criando ferramentas como o cardápio digital e páginas de consulta de produtos e preços para os funcionários que fazem o caixa. "],
        }, {
          name: "Experiências Profissionais",
          text: ["Trainee de Marketing", "Analista de Revenue Management", "Analista de Pricing & Revenue Management", "Gerente e suporte de TI"],
        }, {
          name: "Educação",
          text: ["Graduação em Administração", "Intercâmbio", "Mestrado em Gestão de Eventos Internacionais e Festivais", "Full-Stack Web Dev Bootcamp", "Cadete"],
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
          name: "Chi sono",
          text: ["Dopo il mio ultimo lavoro in una azienda multinazionale, non ero proprio soddisfatta con la mia carriera così ho deciso di lasciare il mio lavore e provare qualcosa di nuovo... Quindi ho iniziato a studiare programmazione. Ci sono persone nella mia famiglia che lavorano in questo settore e così mi hanno consigliato di studiare un po' nel FreeCodeCamp solo per essere sicura che era quello che volevo veramente fare. E, per la mia sorpresa, sono stata molto felice con tutto ciò che ho imparato lì. Allora, ho deciso di spendere un po' più di tempo e soldi nella mia formazione ed ho cominciato un bootcamp di Full-Stack Web Development presso Ironhack. Allo stesso tempo, ho preso parte alla Piscina della École 42, dove ho imparato un po' di linguaggio C. Ogni giorno mi innamoravo ancora di più di quest'area e passavo ore a studiare e mettere in pratica nuovi concetti, ma per me è stato un vero piacere farlo. Tuttavia, con la pandemia i miei piani sono stati cambiati ed quindi ho iniziato a cercare un lavoro in questo campo. Ho iniziato lentamente, dopotutto avevo ancora bisogno di aiutare la mia famiglia con i loro affari. Guardando al lato positivo, però, abbiamo dovuto reinventarci e adottare nuove tecnologie e processi per adattarci a questa nuova realtà. Ho svolto un ruolo attivo in questo processo, aiutando a sviluppare nuovi strumenti come un menu online e una pagina web per la ricerca di prodotti e prezzi."],
        }, {
          name: "Esperienze Professionali",
          text: ["Trainee di Marketing", "Analista di Revenue Management", "Analista di Pricing & Revenue Management", "Manager e supporto informatico"],
        }, {
          name: "Educazione e formazione",
          text: ["Laurea in Amministrazione", "Exchange", "Master in gestione di eventi internazionali e festival", "Full-Stack Web Dev Bootcamp", "Cadete"],
        }, {
          name: "Curiosità",
          btn: "generare una curiosità",
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
