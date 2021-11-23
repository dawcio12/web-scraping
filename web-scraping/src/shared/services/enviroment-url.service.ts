import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class EnvironmentUrlService {
  url:string = 'http://localhost:9000';

  constructor() {
  }
  get getYears() { return this.url + "/years" as string; }
  get getArticles() { return this.url + "/articles" as string; }
  get getAllArticles() { return this.url + "/allArticles" as string; }
  get getArticle(){return this.url + "/article" as string; }

}