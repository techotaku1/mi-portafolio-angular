import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // Define your routes here
  // { path: '', component: HomeComponent },
  // { path: 'blog', component: BlogComponent },
  // { path: 'github', component: GithubComponent },
  // { path: 'doc', component: DocComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
