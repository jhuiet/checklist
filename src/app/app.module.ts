import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CheckListComponent } from './check-list/check-list.component';
import { CheckDetailComponent } from './check-list/check-detail/check-detail.component';
import { TaskItemComponent } from './check-list/task-item/task-item.component';
import { CheckListService } from './check-list/checklist.service';
import { HeaderComponent } from './header/header.component';
import { EditTaskComponent } from './check-list/edit-task/edit-task.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    CheckListComponent,
    CheckDetailComponent,
    TaskItemComponent,
    HeaderComponent,
    EditTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [CheckListService,  MatDatepickerModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
