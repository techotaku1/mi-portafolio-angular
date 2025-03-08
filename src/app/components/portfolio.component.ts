import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

interface PortfolioItem {
  title: string;
  description: string;
  image: string;
  repo: string;
}

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  template: `
    <div class="portfolio">
      <h2>Portafolio</h2>
      <div class="portfolio-items">
        <mat-card *ngFor="let item of portfolio" class="portfolio-item">
          <img mat-card-image [src]="item.image" [alt]="item.title" />
          <mat-card-content>
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
          </mat-card-content>
          <mat-card-actions>
            <a mat-button [href]="item.repo" target="_blank">Más Información</a>
          </mat-card-actions>
        </mat-card>
      </div>
    </div>
  `,
  styles: [
    `
      .portfolio {
        margin: 20px;
        padding: 20px;
      }

      h2 {
        font-size: 2rem;
        font-weight: bold;
        margin-bottom: 20px;
      }

      .portfolio-items {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
      }

      .portfolio-item {
        width: 300px;
      }
    `,
  ],
})
export class PortfolioComponent {
  @Input() portfolio: PortfolioItem[] = [
    {
      title: 'Proyecto 1',
      description: 'Descripción del proyecto 1',
      image: 'ruta/a/imagen1.jpg',
      repo: 'https://github.com/usuario/proyecto1',
    },
    {
      title: 'Proyecto 2',
      description: 'Descripción del proyecto 2',
      image: 'ruta/a/imagen2.jpg',
      repo: 'https://github.com/usuario/proyecto2',
    },
  ];
}
