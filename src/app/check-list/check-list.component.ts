import { Component, OnInit, OnDestroy } from '@angular/core';
import { CheckListService } from './checklist.service';
import { Subscription } from 'rxjs';
import { TaskModel } from './check-detail/Task.model';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-check-list',
  templateUrl: './check-list.component.html',
  styleUrls: ['./check-list.component.scss']
})
export class CheckListComponent implements OnInit, OnDestroy {

  taskSub: Subscription;
  tasks: TaskModel[] = this.checklistService.getTasks();
  taskSelected: number = -1;
  constructor(private checklistService: CheckListService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.taskSub = this.checklistService.tasksUpdated.subscribe(
      (tasks: TaskModel[]) => {
        this.tasks = tasks;
      }
    );
    // this.route.params.subscribe(
    //   (params: Params) => {
        
    //   }
    // );
  }

  setIndex(i: number) {
    this.taskSelected = i;
  }

  ngOnDestroy() {
    this.taskSub.unsubscribe();
  }

  newTask() {
    this.router.navigate(['/edit/new']); //{relativeTo: this.route})
    this.taskSelected = -1;
  }

  editTask() {
    // console.log(this.taskSelected);
    this.router.navigate(['edit', this.taskSelected]);
  }
}
