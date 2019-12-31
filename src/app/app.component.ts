import {Component} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  done = [
    5,
    6
  ];
  weeks = [];
  connectedTo = [];
constructor() {
  this.weeks = [{id: 'list-1', weeklist: [5, 6]}, {id: 'list-2', weeklist: [8, 16]}];
  for (const week of this.weeks) {
    this.connectedTo.push(week.id);
  }
}

  drop(event: CdkDragDrop<number[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }
}
