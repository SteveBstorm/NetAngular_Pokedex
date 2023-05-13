import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExternaldetailsComponent } from './components/externaldetails/externaldetails.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path : '', redirectTo: 'home', pathMatch : 'full'},
  {path: 'detail/:url', component : ExternaldetailsComponent},
  {path : 'home', component : HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
