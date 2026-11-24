import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Project {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  /** 'dark' for logos with light lettering, 'light' for logos with dark lettering */
  banner: 'dark' | 'light';
  tags: string[];
  link?: string;
  linkLabel?: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'CoWIN',
      subtitle: 'COVID-19 Vaccination Management Platform',
      description: 'Developed and enhanced a COVID-19 vaccination management platform that let citizens register for vaccinations, schedule appointments, manage vaccination records and download certificates, with real-time access to vaccination and appointment data across devices.',
      image: 'assets/images/cowin.svg',
      banner: 'dark',
      tags: ['Angular 14', 'TypeScript', 'Web API', 'SQL Server', 'Node.js', 'Bootstrap'],
      link: 'https://www.cowin.gov.in/',
      linkLabel: 'Visit CoWIN'
    },
    {
      title: 'Radian Connect',
      subtitle: 'Cloud-based CRM for sales teams',
      description: 'Contributed to a cloud-based CRM platform hosted on Azure that helps sales teams in Australia manage relationships with healthcare practitioners and support staff, track interactions, schedule meetings and record sales encounters. Built as an ASP.NET Core and Angular web app with a Xamarin mobile app.',
      image: 'assets/images/radian-connect.svg',
      banner: 'light',
      tags: ['.NET Core', 'Angular 14', 'Entity Framework', 'Web API', 'SQL Server', 'JWT', 'Xamarin']
    }
  ];
}
