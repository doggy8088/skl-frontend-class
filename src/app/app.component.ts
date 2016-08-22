import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'The Will Will Web';
  title_url = 'http://blog.miniasp.com';

  constructor(private datasvc: DataService) {

  }

}
