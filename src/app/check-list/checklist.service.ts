import { Injectable } from '@angular/core';
import { CheckDetailComponent } from './check-detail/check-detail.component';
import { Subject } from 'rxjs';
import { TaskModel } from './check-detail/Task.model';

@Injectable()
export class CheckListService {
  tasks: TaskModel[] = [
    new TaskModel('title', 'the desc', new Date()),
    new TaskModel('titleaoeu', 'the descgcwgcwg', new Date()),
    new TaskModel('titlepuihd', 'tghgcwgcte desc', new Date()),
    new TaskModel('titlegcwgcw', 'the description', new Date()),

  ];
  currentViewedTask: number;
  tasksUpdated = new Subject<TaskModel[]>();

  getTasks() {
    return this.tasks.slice();
  }

  getTask(id: number) {
    return this.tasks[id];
  }

  addTask(task: TaskModel) {
    this.tasks.push(task);
    this.tasksUpdated.next(this.tasks.slice());
  }

  updateTask(index: number, task: TaskModel) {
    this.tasks[index] = task;
    this.tasksUpdated.next(this.tasks.slice());
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
    this.tasksUpdated.next(this.tasks.slice());
  }

}
