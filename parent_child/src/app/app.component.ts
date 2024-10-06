import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'parent_child';
  countries = ['India', 'USA'];

  onCitySelected(city: string) {
    console.log('Selected City:', city);
  }
}
