import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'spa-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  aboutCategories: Array<string>;
  textCategories: Array<string>;

  aboutCategoriesPT: Array<string> = ["Sobre", "Experiências Profissionais", "Educação", "Curiosidades"];
  aboutCategoriesEN: Array<string> = ["About", "Professional Experiences", "Education", "Curiosities"];
  aboutCategoriesIT: Array<string> = ["Resumo", "Experiências Profissionais", "Educação", "Curiosidades"];
  textCategoriesEN: Array<string> = [];
  textCategoriesIT: Array<string> = [];
  textCategoriesPT: Array<string> = [];

  constructor() { }

  ngOnInit(): void {
  }

}
