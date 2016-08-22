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

  isEdit = false;

  constructor() {
    firebase.database().ref('/subtitle').on('value', (value) => {
      this.subtitle = value.val();
    })
  }

  ngOnInit() {
  }

  plusOne($event: MouseEvent) {
    this.num=this.num+1;
    console.log($event);
  }

  saveSubtitle($event: KeyboardEvent) {
    var h3 = $event.target as HTMLHeadingElement;
    firebase.database().ref('/subtitle').set(h3.innerText).then(a => {
      this.isEdit = false;
    }).catch(error => {
      alert('Error occurred.');
      this.isEdit = false;
    });
  }

}
