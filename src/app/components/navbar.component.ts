import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    RouterLink,
    RouterLinkActive,
  ],
  template: `
    <mat-toolbar color="primary">
      <span class="site-title" routerLink="/">Portfolio</span>
      <span class="spacer"></span>

      <div class="nav-links">
        <a mat-button routerLink="/" routerLinkActive="active">Home</a>
        <a mat-button routerLink="/blog" routerLinkActive="active">BLOG</a>
        <a mat-button routerLink="/github" routerLinkActive="active">GITHUB</a>
        <a mat-button routerLink="/doc" routerLinkActive="active">DOC</a>
      </div>
    </mat-toolbar>
  `,
  styles: [
    `
      .site-title {
        margin-left: 16px;
        cursor: pointer;
      }
      .spacer {
        flex: 1 1 auto;
      }
      .nav-links {
        display: flex;
        gap: 8px;
      }
      .active {
        background: rgba(255, 255, 255, 0.1);
      }
    `,
  ],
})
export class NavbarComponent {}
