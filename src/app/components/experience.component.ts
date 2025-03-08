import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';

interface Experience {
  title: string;
  company: string;
  description: string;
  duration: string;
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatListModule],
  template: `
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
      .experience-card {
        margin: 20px;
        padding: 20px;
      }

      h2 {
        font-size: 2rem;
        font-weight: bold;
        margin-bottom: 20px;
      }

      mat-list-item {
        margin-bottom: 10px;
      }

      .description {
        white-space: pre-wrap; /* Ensures that the text wraps correctly */
        word-wrap: break-word; /* Ensures that long words break correctly */
      }
    `,
  ],
})
export class ExperienceComponent {
  @Input() experience: Experience[] = [
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
