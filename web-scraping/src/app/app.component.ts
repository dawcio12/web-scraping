import { Component } from '@angular/core';
import { Articles } from 'src/shared/models/models';
import { ArticleService } from 'src/shared/services/article.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'web-scraping';
  articles:Articles={articles:[],length:0};
  constructor(private articleService:ArticleService){

  }

  ngOnInit(): void {
    this.articleService.getAllArticles().subscribe(data => {this.articles=data;
      console.log(data);
      
    })
  }
}
