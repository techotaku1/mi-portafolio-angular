import { Component } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatSliderModule } from '@angular/material/slider';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';

interface Skill {
  skill: string;
  percentage: number;
}

interface Experience {
  title: string;
  company: string;
  description: string;
  duration: string;
}

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    MatIconModule,
    MatCardModule,
    MatSliderModule,
    CommonModule,
    FormsModule,
    MatListModule,
  ],
  template: `
    <div class="profile">
      <h2>Profile</h2>
      <p>Jose David Gonzalez</p>
      <p>Programador FULL STACK</p>
      <p>
        Soy un apasionado desarrollador con experiencia en tecnologías frontend
        y backend. Me especializo en React, Next.js y Python con FastAPI para
        crear aplicaciones modernas y eficientes.
      </p>
      <p>
        También tengo experiencia en edición de video utilizando CapCut y en la
        creación de presentaciones con Canva.
      </p>
      <a
        href="https://docs.google.com/document/d/1kqRV43yV2ZLz0HdBHo_6All556IK-GgFYC-8wb4WUcU/edit?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button>CONTACTAME</button>
      </a>
      <div class="contact-icons">
        <a
          href="https://wa.me/573225727602"
          target="_blank"
          rel="noopener noreferrer"
        >
          <mat-icon>whatsapp</mat-icon>
        </a>
        <a href="tel:+573241149554" target="_blank" rel="noopener noreferrer">
          <mat-icon>phone</mat-icon>
        </a>
        <a
          href="mailto:jsdg1818@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <mat-icon>email</mat-icon>
        </a>
      </div>
    </div>

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

    <mat-card class="experience-card">
      <mat-card-content>
        <h2>Experiencia</h2>
        <mat-list>
          <mat-list-item *ngFor="let item of experience">
            <h3 matLine>{{ item.title }}</h3>
            <p matLine>{{ item.company }}</p>
            <p matLine>{{ item.duration }}</p>
            <p matLine class="description">{{ item.description }}</p>
          </mat-list-item>
        </mat-list>
      </mat-card-content>
    </mat-card>
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
      .contact-icons {
        display: flex;
        gap: 10px;
      }
      .skills-card {
        margin: 20px;
        padding: 20px;
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
      .experience-card {
        margin: 20px;
        padding: 20px;
      }
      mat-list-item {
        margin-bottom: 10px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
      }
      .description {
        white-space: pre-wrap; /* Ensures that the text wraps correctly */
        word-wrap: break-word; /* Ensures that long words break correctly */
        margin-top: 5px;
      }
    `,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ProfileComponent {
  skills: Skill[] = [
    { skill: 'HTML/CSS', percentage: 90 },
    { skill: 'JavaScript', percentage: 85 },
    { skill: 'React', percentage: 80 },
    { skill: 'Angular', percentage: 75 },
    { skill: 'Python', percentage: 85 },
    { skill: 'Node.js', percentage: 80 },
  ];

  experience: Experience[] = [
    {
      title: 'Desarrollador Frontend',
      company: 'Empresa A',
      duration: 'Enero 2020 - Presente',
      description: 'Desarrollo de aplicaciones web con Angular y React.',
    },
    {
      title: 'Desarrollador Backend',
      company: 'Empresa B',
      duration: 'Junio 2018 - Diciembre 2019',
      description: 'Desarrollo de APIs con Node.js y Python.',
    },
    {
      title: 'Ingeniero de Software',
      company: 'Empresa C',
      duration: 'Marzo 2016 - Mayo 2018',
      description: 'Desarrollo de soluciones de software a medida.',
    },
    {
      title: 'Desarrollador Junior',
      company: 'Empresa D',
      duration: 'Enero 2014 - Febrero 2016',
      description:
        'Mantenimiento y desarrollo de nuevas funcionalidades en aplicaciones existentes.',
    },
  ];
}
