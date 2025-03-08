import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar.component';
import { ProfileComponent } from './components/profile.component';
import { SkillsComponent } from './components/skills.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, ProfileComponent, SkillsComponent],
  template: `
    <app-navbar></app-navbar>
    <app-profile></app-profile>
    <!-- Include ProfileComponent -->
    <app-skills></app-skills>
    <!-- Include SkillsComponent -->
    <router-outlet></router-outlet>
  `,
  styles: [],
})
export class AppComponent {}
