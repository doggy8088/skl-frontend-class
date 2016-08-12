import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'app works!';

  keyword = '';

  doSearch($event: KeyboardEvent) {
    var input = $event.target as HTMLInputElement;
    this.keyword = input.value;
  }
}
