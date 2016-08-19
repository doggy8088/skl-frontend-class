import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-search',
  templateUrl: 'search.component.html',
  styleUrls: ['search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private datasvc: DataService) { }

  // private datasvc: DataService;
  // constructor(datasvc: DataService) {
  //   this.datasvc = datasvc;
  // }

  ngOnInit() {
  }

}
