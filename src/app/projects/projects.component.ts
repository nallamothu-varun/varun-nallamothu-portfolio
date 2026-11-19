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
      description: "Contributed to CoWIN, India's national digital platform for managing COVID-19 vaccination. I worked on application features that supported vaccination workflows and user-facing services.",
      image: 'assets/images/cowin.svg',
      banner: 'dark',
      tags: ['Python', 'Node.js', 'Angular'],
      link: 'https://www.cowin.gov.in/',
      linkLabel: 'Visit CoWIN'
    },
    {
      title: 'Radian Connect',
      subtitle: 'Frontend and backend development',
      description: 'Built and maintained user-facing features and frontend functionality for Radian Connect, along with the backend integrations that power them.',
      image: 'assets/images/radian-connect.svg',
      banner: 'light',
      tags: ['.NET Core', 'Angular']
    }
  ];
}
