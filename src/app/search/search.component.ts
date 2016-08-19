import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: 'search.component.html',
  styleUrls: ['search.component.css']
})
export class SearchComponent implements OnInit {

  keyword: string;

  @Output()
  search = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  doSearch(keyword) {
    this.keyword = keyword;
    this.search.emit(keyword);
  }

}
