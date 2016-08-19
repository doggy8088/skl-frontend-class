import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() title: string;
  @Input() title_url: string;

  subtitle = '記載著 Will 在網路世界的學習心得與技術分享';

  num = 10;

  constructor() { }

  ngOnInit() {
  }

  plusOne($event: MouseEvent) {
    this.num=this.num*1.1;
    console.log($event);
  }

}
