import { Component, OnInit } from '@angular/core';
import { Article } from 'src/shared/models/models';
import { ArticleService } from 'src/shared/services/article.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {
  articlesChunk: Article[] = []
  articles: Article[] = [];
  years: [] = [];
  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  constructor(private articleService: ArticleService) {

  }

  ngOnInit(): void {
    this.getAllArticles();
    this.articleService.getYeas().subscribe(data => {


      this.years = data.years;

    })
  }
  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
  }
  onPageChanged(e: { pageIndex: number; pageSize: number; }) {
    let firstCut = e.pageIndex * e.pageSize;
    let secondCut = firstCut + e.pageSize;
    this.articlesChunk = this.articles.slice(firstCut, secondCut);
  }
  filterByYear(year: string) {
    this.articleService.getArticleFromYear(year).subscribe(data => {


      this.articlesChunk = data.articleFromYear.slice(0, this.pageSize);
      this.articles = data.articleFromYear;

    })
  }
  getAllArticles() {
    this.articleService.getAllArticles().subscribe(data => {
      this.articles = data.articles.sort();
      this.articlesChunk = data.articles.slice(0, this.pageSize);
    })
  }
}
