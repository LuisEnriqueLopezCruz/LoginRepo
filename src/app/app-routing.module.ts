import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/01-Login/login/login.component';
import { TaskManagerComponent } from './components/02-TaskManager/task-manager/task-manager.component';
import { TaskDetailComponent } from './components/02-TaskManager/task-detail/task-detail.component';
const routes:Routes=[
  {path:'', redirectTo:'/login',pathMatch:'full'},
  {path:'login', component: LoginComponent},
  {path: 'tasks', component: TaskManagerComponent},
  {path:'tasks/detail/:id', component:TaskDetailComponent},
  // {path:'**',component:PageNotFoundComponent}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
