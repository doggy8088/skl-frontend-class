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

  constructor(private datasvc: DataService) { }

  ngOnInit() {
  }

  ngOnChanges() {
    console.log('something changed');
  }

}
