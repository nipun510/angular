import { Routes } from '@angular/router';


import { UsersComponent } from '../users/users.component';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';

export const routes: Routes = [
  { path: 'home',  component: HomeComponent },
  { path: 'users',     component: UsersComponent },
  { path: 'contact',     component: ContactComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];