import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from './components/add-book/add-book.component';
import { BookComponent } from './components/book/book.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, data: { 'id': 'id' } },
  { path: 'book', component: BookComponent, data: { 'id': 'id' } },
  { path: 'add-book', component: AddBookComponent, data: { 'id': 'id' } },
  { path: '', redirectTo: 'home', pathMatch: 'full', data: { 'id': 'id' } },
  { path: '**', component: PageNotFoundComponent, data: { 'id': 'id' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }