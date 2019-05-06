import { Component, OnInit } from '@angular/core';
import { CheckListService } from '../checklist.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskModel } from './Task.model';

@Component({
  selector: 'app-check-detail',
  templateUrl: './check-detail.component.html',
  styleUrls: ['./check-detail.component.scss']
})
export class CheckDetailComponent implements OnInit {

  id: number;
  task: TaskModel;
  selecting = false;
  constructor(private checklistService: CheckListService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params) => {
        this.id = +params['id'];
        this.task = this.checklistService.getTask(this.id);
      }
    );
  }

  onEdit() {
    this.router.navigate(['/edit', this.id]);
  }

  onDelete() {
    this.checklistService.deleteTask(this.id);
    this.router.navigate(['']);
  }
}
