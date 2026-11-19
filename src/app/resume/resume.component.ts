import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class ResumeComponent {
  experience = [
    {
      company: 'Informanus Analytics and Artificial Intelligence Inc.',
      role: 'Analyst',
      period: '2023 May - Present',
      location: 'Kingston, Canada',
      logo: 'assets/images/informanos-logo.svg',
      darkLogo: true,
      text: 'Leveraging data insights and AI to optimize operations, contributing to efficiency and growth.'
    },
    {
      company: 'School of Business, St Lawrence College',
      role: 'Business Analytics Intern',
      period: '2023 Mar - 2023 Apr',
      location: 'Kingston, Canada',
      logo: 'assets/images/st-lawrence-college.jpg',
      zoom: true,
      text: 'Automated meeting minutes using Python and the GPT-4 API, and enhanced data visualization with Power BI.'
    },
    {
      company: 'Covalense Global',
      role: 'Full Stack Developer',
      period: '2018 Jan - 2022 Apr',
      location: 'Hyderabad, India',
      logo: 'assets/images/covalense-global.png',
      text: 'Designed and developed complex web applications, collaborating cross-functionally and using Agile Scrum for high-quality results.'
    }
  ];

  education = [
    {
      school: 'St Lawrence College, Kingston, Canada',
      degree: 'Postgraduate Diploma, Business Analytics',
      period: '2022 Jan - 2023 Mar',
      logo: 'assets/images/st-lawrence-college.jpg',
      zoom: true
    },
    {
      school: 'Anna University, Chennai, India',
      degree: 'Bachelor of Engineering, Computer Science and Engineering',
      period: '2013 Jun - 2017 Apr',
      logo: 'assets/images/anna-university-logo.svg'
    }
  ];

  skills: { name: string; icon?: string; img?: string; zoom?: boolean }[] = [
    { name: '.NET', img: 'assets/images/dotnet.png' },
    { name: 'Angular', img: 'assets/images/angular.png' },
    { name: 'Azure', img: 'assets/images/azure.png' },
    { name: 'Power BI', img: 'assets/images/power-bi.png', zoom: true },
    { name: 'Python', img: 'assets/images/python.jpg' },
    { name: 'HTML', icon: 'fa-brands fa-html5' },
    { name: 'Claude', icon: 'fa-solid fa-wand-magic-sparkles' }
  ];
}
