import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class DataService {

  keyword: string;

	constructor(private http: Http)
  {
    let articleRefs = firebase.database().ref('/articles');

    articleRefs.on('value', (snapshot) => {
      let items = snapshot.val();
      console.log(items);

      if(items == null) {
        http.get('/api/articles.json')
            .subscribe(value => {
              this.data = value.json();
              for(let item of this.data) {
                articleRefs.push(item);
              }
            });
      } else {
        this.data = [];
        for (let i in items) {
          // console.log(items[i]);
          items[i].key = i;
          this.data.push(items[i]);
        }
      }
    });

	}

  deleteArticle(i) {
    var id = this.data[i].key;
    // this.data.splice(i, 1);
    let itemRefs = firebase.database().ref('/articles/' + id);
    itemRefs.remove();
  }

  saveArticle(item) {
    let itemRefs = firebase.database().ref('/articles/' + item.key);
    // itemRefs.set(item);
    itemRefs.update({
      title: item.title,
      summary: item.summary
    });
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
