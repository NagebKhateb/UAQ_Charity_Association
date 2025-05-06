import { Routes } from '@angular/router';
import { AddComponent } from './components/add/add.component';
import { MainComponent } from './components/main/main.component';

export const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'add', component: AddComponent },
  { path: '**', redirectTo: '' },
];
