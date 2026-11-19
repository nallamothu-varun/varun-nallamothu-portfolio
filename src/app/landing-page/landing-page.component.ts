import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class LandingPageComponent {
  stats = [
    { value: '5+', label: 'Years experience' },
    { value: '2', label: 'Countries (India & Canada)' },
    { value: 'PG Diploma', label: 'Business Analytics' }
  ];

  skills = [
    { name: '.NET', icon: 'assets/images/dotnet.png' },
    { name: 'Angular', icon: 'assets/images/angular.png' },
    { name: 'Azure', icon: 'assets/images/azure.png' },
    { name: 'Power BI', icon: 'assets/images/power-bi.png', zoom: true },
    { name: 'Python', icon: 'assets/images/python.jpg' }
  ];
}
