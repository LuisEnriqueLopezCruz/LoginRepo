import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './components/01-Login/login/login.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { TaskManagerComponent } from './components/02-TaskManager/task-manager/task-manager.component';
import { TaskFormComponent } from './components/02-TaskManager/task-form/task-form.component';
import { TaskDetailComponent } from './components/02-TaskManager/task-detail/task-detail.component';
import { TaskListComponent } from './components/02-TaskManager/task-list/task-list.component';
import { TaskItemComponent } from './components/02-TaskManager/task-item/task-item.component';
import { SearchPipe } from './pipes/search.pipe';
import { MyUppercasePipe } from './pipes/my-uppercase.pipe';
import { Routes } from '@angular/router';
import { MessageService } from './services/message.service';
import { TaskService } from './services/task.service';
import { HighlightDirective } from './directives/highlight.directive';
import { TaskCompletedDirective } from './directives/task-completed.directive';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TaskManagerComponent,
    TaskFormComponent,
    TaskDetailComponent,
    TaskListComponent,
    TaskItemComponent,
    SearchPipe,
    MyUppercasePipe,
    HighlightDirective,
    TaskCompletedDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule
    
  ],
  providers: [TaskService,MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
