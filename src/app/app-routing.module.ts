import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthComponent} from './views/auth/auth.component';
import {TutorshipListComponent} from './views/tutorship-list/tutorship-list.component';
import {TutorshipCreateComponent} from './views/tutorship-create/tutorship-create.component';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent
  },
  {
    path: 'list',
    component: TutorshipListComponent
  },
  {
    path: 'create',
    component: TutorshipCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
