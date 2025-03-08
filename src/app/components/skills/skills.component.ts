import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatSliderModule } from '@angular/material/slider';
import { FormsModule } from '@angular/forms';

interface Skill {
  skill: string;
  percentage: number;
}

@Component({
  selector: 'app-skills',
  imports: [CommonModule, MatCardModule, MatSliderModule, FormsModule],
  template: `
    <mat-card class="skills-card">
      <mat-card-content>
        <h2>Skills</h2>

        <div class="skills-container">
          <div *ngFor="let skill of skills" class="skill-item">
            <div class="skill-header">
              <span class="skill-name">{{ skill.skill }}</span>
              <span class="skill-percentage">{{ skill.percentage }}%</span>
            </div>
            <mat-slider [min]="0" [max]="100" [disabled]="true">
              <input matSliderThumb [value]="skill.percentage" />
            </mat-slider>
          </div>
        </div>
      </mat-card-content>
    </mat-card>
  `,
  styles: [
    `
      .skills-card {
        margin: 20px;
        padding: 20px;
      }

      h2 {
        font-size: 2rem;
        font-weight: bold;
        margin-bottom: 20px;
      }

      .skills-container {
        display: flex;
        flex-direction: column;
        gap: 20px;
      }

      .skill-item {
        width: 100%;
      }

      .skill-header {
        display: flex;
        justify-content: space-between;
        margin-bottom: 8px;
      }

      .skill-name {
        font-weight: 500;
      }

      mat-slider {
        width: 100%;
      }
    `,
  ],
})
export class SkillsComponent {
  @Input() skills: Skill[] = [
    { skill: 'HTML/CSS', percentage: 90 },
    { skill: 'JavaScript', percentage: 85 },
    { skill: 'React', percentage: 80 },
    { skill: 'Angular', percentage: 75 },
    { skill: 'Python', percentage: 85 },
    { skill: 'Node.js', percentage: 80 },
  ];
}
