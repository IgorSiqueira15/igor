import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { Task } from './task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'dragDrop';

  selectTasks: Task[];

  availableTasks: Task[];

  draggedTask: Task;

  constructor(private appService: AppService) {}

  ngOnInit() {
    this.selectTasks = [];
    this.appService.getData().then(tasks => (this.availableTasks = tasks));
  }

  dragStart(event, task: Task) {
    this.draggedTask = task;
  }

  drop(event) {
    if (this.draggedTask) {
      let draggedTaskIndex = this.findIndex(this.draggedTask);
      this.selectTasks = [...this.selectTasks, this.draggedTask];
      this.availableTasks = this.availableTasks.filter(
        (val, i) => i != draggedTaskIndex
      );
      this.draggedTask = null;
    }
  }

  dragEnd(event) {
    this.draggedTask = null;
  }

  findIndex(task: Task) {
    let index = -1;
    for (let i = 0; i < this.availableTasks.length; i++) {
      if (task.id === this.availableTasks[i].id) {
        index = i;
        break;
      }
    }
    return index;
  }
}
