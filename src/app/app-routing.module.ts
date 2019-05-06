import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CheckListComponent } from './check-list/check-list.component';
import { CheckDetailComponent } from './check-list/check-detail/check-detail.component';
import { EditTaskComponent } from './check-list/edit-task/edit-task.component';

const routes: Routes = [
  // {path: '', component: CheckListComponent},
  { path: ':id', component: CheckDetailComponent },
  { path: 'edit/new', component: EditTaskComponent },
  { path: 'edit/:id', component: EditTaskComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
