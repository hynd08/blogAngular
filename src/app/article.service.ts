import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Article} from './article';
import {Observable} from 'rxjs';
@Injectable()
export class ArticleService {

    constructor(private httpClient: HttpClient) {}
    public list(): Observable<Article[]> {
        return this.httpClient.get<Array<Article>>('/assets/articles.json')


    }

}


