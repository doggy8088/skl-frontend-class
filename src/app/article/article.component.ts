import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: 'article.component.html',
  styleUrls: ['article.component.css']
})
export class ArticleComponent implements OnInit, OnChanges {

  @Input() i:any;
  @Input() item: any;

  @Output()
  delete = new EventEmitter<number>();

  @Input() keyword: string;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    console.log('something changed');
  }

  deleteArticle(i) {
    this.delete.emit(i);
  }
}
