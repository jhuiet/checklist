import { Component, OnInit, Input } from '@angular/core';
import { TaskModel } from '../check-detail/Task.model';
import { CheckListService } from '../checklist.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnInit {

  @Input() index: number;
  @Input() task: TaskModel;

  constructor(private checklistService: CheckListService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params) => {
        this.checklistService.currentViewedTask = +params['id'];
      }
    );
  }

}
