import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: 'article.component.html',
  styleUrls: ['article.component.css']
})
export class ArticleComponent implements OnInit {

  @Input() i:any;
  @Input() item: any;

  @Output()
  delete = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  deleteArticle(i) {
    this.delete.emit(i);
  }
}
