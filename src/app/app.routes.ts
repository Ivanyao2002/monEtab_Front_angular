import { Routes } from '@angular/router';
import {LoginComponent} from './presentation/pages/login/login.component';
import {DashboardComponent} from './presentation/pages/dashboard/dashboard.component';
import {SidebarComponent} from './presentation/components/layouts/sidebar/sidebar.component';
import {ListStudentComponent} from './presentation/components/shared/student/list-student/list-student.component';
import {AddStudentComponent} from './presentation/components/shared/student/add-student/add-student.component';
import {EditStudentComponent} from './presentation/components/shared/student/edit-student/edit-student.component';
import {ListTeacherComponent} from './presentation/components/shared/teacher/list-teacher/list-teacher.component';
import {ListUserComponent} from './presentation/components/shared/user/list-user/list-user.component';
import {AddTeacherComponent} from './presentation/components/shared/teacher/add-teacher/add-teacher.component';
import {AddUserComponent} from './presentation/components/shared/user/add-user/add-user.component';
import {EditTeacherComponent} from './presentation/components/shared/teacher/edit-teacher/edit-teacher.component';
import {EditUserComponent} from './presentation/components/shared/user/edit-user/edit-user.component';
import {ReportComponent} from './presentation/components/shared/report/report/report.component';

export const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', component: SidebarComponent, children: [
    {path: '', component: DashboardComponent, title: 'MonEtab - Dashboard'},
    {path: 'list-student', component: ListStudentComponent, title: 'MonEtab - Students'},
    {path: 'list-teacher', component: ListTeacherComponent, title: 'MonEtab - Teachers'},
    {path: 'list-user', component: ListUserComponent, title: 'MonEtab - Users'},
    {path: 'add-student', component: AddStudentComponent, title: 'MonEtab - Students'},
    {path: 'add-teacher', component: AddTeacherComponent, title: 'MonEtab - Teachers'},
    {path: 'add-user', component: AddUserComponent, title: 'MonEtab - Users'},
    {path: 'edit-student', component: EditStudentComponent, title: 'MonEtab - Students'},
    {path: 'edit-teacher', component: EditTeacherComponent, title: 'MonEtab - Teachers'},
    {path: 'edit-user', component: EditUserComponent, title: 'MonEtab - Users'},
    {path: 'report', component: ReportComponent, title: 'MonEtab - Report'},
    ]},
  { path : "" , redirectTo : "/login", pathMatch : "full"},
];
