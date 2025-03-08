import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  standalone: true,
  template: `
    <div class="profile">
      <h2>Profile</h2>
      <!-- Profile content goes here -->
    </div>
  `,
  styles: [
    `
      .profile {
        margin: 20px;
        padding: 20px;
      }
      h2 {
        font-size: 2rem;
        font-weight: bold;
        margin-bottom: 20px;
      }
    `,
  ],
})
export class ProfileComponent {}
