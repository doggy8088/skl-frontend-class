import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-article',
  templateUrl: 'article.component.html',
  styleUrls: ['article.component.css']
})
export class ArticleComponent implements OnInit, OnChanges {

  @Input() i:any;
  @Input() item: any;

  IsEdit = false;

  constructor(private datasvc: DataService) { }

  ngOnInit() {
  }

  ngOnChanges() {
    // console.log('something changed');
  }

  doSave() {
    this.datasvc.saveArticle(this.item);
    this.IsEdit=false;
  }

}
