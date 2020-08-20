import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'rating-star';

  stars: number[] = [1, 2, 3, 4, 5];
  selectedValue: number = 0;

  constructor() { }
  
  ngOnInit() {
  }
  
  count(star) {
    if (star === this.selectedValue)
      this.selectedValue = this.selectedValue - 1;
    else
      this.selectedValue = star;
    console.log('Value of star', star);
  }
}
