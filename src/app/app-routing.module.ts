import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './components/profile.component';
import { ExperienceComponent } from './components/experience.component';
import { PortfolioComponent } from './components/portfolio.component';

const routes: Routes = [
  { path: '', component: ProfileComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
