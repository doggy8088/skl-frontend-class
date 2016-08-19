import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class DataService {

  keyword: string;

	constructor(private http: Http)
  {
    http.get('https://echo.getpostman.com/get?test=123').subscribe(value => console.log(value));

    http.get('/api/articles.json')
        .subscribe(value => {
          this.data = value.json();
        });
	}

  deleteArticle(i) {
    this.data.splice(i, 1);
  }

  doSearch(keyword:string) {
    this.keyword=keyword;

    this.http.get('/api/articles.json?q='+keyword)
        .subscribe(value => {
          this.data = value.json();
        });

  }

  data:any;
}
