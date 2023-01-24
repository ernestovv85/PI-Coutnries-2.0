import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePageComponent } from './components/create-page/create-page.component';
import { DetailPageComponent } from './components/detail-page/detail-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';

const routes: Routes = [
  {path:'', component:LandingPageComponent},
  {path:'home', component:HomePageComponent},
  {path:'detail', component:DetailPageComponent},
  {path:'create', component:CreatePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
