import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'propagator';
  message : string = "time print";
  counter: number = null;
  count: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onClickCounter(counter){
    setInterval(()=>{
      this.count++;
    },counter);
  }
}
