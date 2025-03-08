import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar.component';
import { ProfileComponent } from './components/profile.component'; // Ensure this path is correct
import { SkillsComponent } from './components/skills.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    ProfileComponent, // Ensure this component is correctly imported
    SkillsComponent,
  ],
  template: `
    <app-navbar></app-navbar>
    <router-outlet></router-outlet>
  `,
  styles: [],
})
export class AppComponent {}
