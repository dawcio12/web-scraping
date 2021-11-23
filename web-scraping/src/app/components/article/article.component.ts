import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/shared/models/models';
import { ArticleService } from 'src/shared/services/article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  post: Post = { comments: "", text: "", title: "" };
  constructor(private articleService: ArticleService, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    const title = this.route.snapshot.paramMap.get('title') || "";
    this.articleService.getArticleWithTitle(title).subscribe(data => {
      this.post = data.post;
    })

  }

}
