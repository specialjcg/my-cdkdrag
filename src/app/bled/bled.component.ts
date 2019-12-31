import {Component, Input, OnInit} from '@angular/core';


@Component({
  selector: 'app-bled',
  templateUrl: './bled.component.html',
  styleUrls: ['./bled.component.scss']
})
export class BledComponent implements OnInit {

  @Input() nbled: number;

  anime = [];
  ledstrip = [];

  constructor() {

  }


  ngOnInit() {
    let i: number;
    for (i = 0; i < this.nbled; i++) {
      this.anime[i] = '';
      this.ledstrip[i] = i;
    }
  }

  changeColor(item) {
    if (this.anime[item] === '') {
      this.anime[item] = 'animationgreen';
    } else {
      if (this.anime[item] === 'animationgreen') {
        this.anime[item] = 'animationred';
      } else {
        if (this.anime[item] === 'animationred') {
          this.anime[item] = 'animationblue';
        } else {
          this.anime[item] = '';
        }
      }

    }
  }
}
