import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { CheckListService } from '../checklist.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskModel } from '../check-detail/Task.model';
@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss']
})
export class EditTaskComponent implements OnInit {
  taskToEdit: TaskModel;
  editMode = false;
  id: number;
  taskForm: FormGroup;

  constructor(
    private checkListService: CheckListService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.taskToEdit = this.checkListService.getTask(this.id);
      this.editMode = params['id'];
      this.initForm();
    });
  }

  initForm() {
    let taskName = '';
    let taskDesc = '';
    let taskDate = new Date();

    if (this.editMode) {
      taskName = this.taskToEdit.title;
      taskDesc = this.taskToEdit.description;
      taskDate = this.taskToEdit.dueDate;
    }

    this.taskForm = this.fb.group({
      title: [taskName, Validators.required],
      description: [taskDesc],
      date: [taskDate]
    });
  }

  onCancel() {
    if (this.id) {
      this.router.navigate([this.id]);
    } else {
      this.router.navigate(['']);
    }
  }

  submit() {
    if (this.editMode) {
      this.checkListService.updateTask(this.id, this.taskForm.value);
    } else {
      this.checkListService.addTask(this.taskForm.value);
    }
    this.onCancel();
  }

  onDelete() {
    this.checkListService.deleteTask(this.id);
    this.onCancel();
  }
}
