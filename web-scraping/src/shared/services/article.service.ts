import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { EnvironmentUrlService } from "./enviroment-url.service";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";


@Injectable({
    providedIn: 'root'
})
export class ArticleService {
    constructor(private http: HttpClient, private envUrl: EnvironmentUrlService) { }

    public getArticleWithTitle(title: string): Observable<any> {
        let params = new HttpParams().set("title", title);
        return this.http.get(this.envUrl.getArticle, { params });
    }
    public getAllArticles(): Observable<any> {

        return this.http.get(this.envUrl.getAllArticles, {});
    }

    public getYeas(): Observable<any> {
         return this.http.get(this.envUrl.getYears, {});
    }

    public getArticleFromYear(year: string): Observable<any> {
        let params = new HttpParams().set("year", year);
        return this.http.get(this.envUrl.getArticles, { params });
    }
}