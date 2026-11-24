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
  resumeUrl = 'assets/Varun_DotNet_Resume.pdf';

  experience: {
    company: string; role: string; period: string; location: string; text: string;
    logo?: string; icon?: string; darkLogo?: boolean; zoom?: boolean;
  }[] = [
    {
      company: 'Saisethsons',
      role: 'Software Engineer',
      period: '2024 Aug - 2026 Aug',
      location: 'Hyderabad, India',
      icon: 'fa-solid fa-building',
      darkLogo: true,
      text: 'Led development projects and collaborated with cross-functional teams to deliver scalable software solutions, while mentoring junior colleagues and upholding coding standards and project timelines.'
    },
    {
      company: 'Informanus Analytics and Artificial Intelligence Inc.',
      role: 'Analyst',
      period: '2023 Nov - 2024 Jul',
      location: 'Kingston, Canada',
      logo: 'assets/images/informanos-logo.svg',
      darkLogo: true,
      text: 'Leveraged data insights and AI to optimize operations, contributing to efficiency and growth.'
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
      role: 'Software Engineer',
      period: '2021 Feb - 2022 Apr',
      location: 'Hyderabad, India',
      logo: 'assets/images/covalense-global.png',
      text: 'Provided strategic consulting to optimize client business processes, and led stakeholder meetings to define project scope and drive technology adoption through tailored training sessions.'
    },
    {
      company: 'Covalense Global',
      role: 'Jr Software Engineer',
      period: '2019 Jul - 2021 Jan',
      location: 'Hyderabad, India',
      logo: 'assets/images/covalense-global.png',
      text: 'Designed and developed software applications across the full development lifecycle, translating client needs into technical requirements, conducting code reviews and providing technical support.'
    },
    {
      company: 'Covalense Global',
      role: 'Software Developer Intern',
      period: '2019 Jan - 2019 Jun',
      location: 'Hyderabad, India',
      logo: 'assets/images/covalense-global.png',
      text: 'Supported and maintained client applications, performed manual testing for defect resolution and contributed to software documentation.'
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
    { name: 'TypeScript', icon: 'fa-solid fa-code' },
    { name: 'JavaScript', icon: 'fa-brands fa-js' },
    { name: 'HTML5', icon: 'fa-brands fa-html5' },
    { name: 'CSS3', icon: 'fa-brands fa-css3-alt' },
    { name: 'Bootstrap', icon: 'fa-brands fa-bootstrap' },
    { name: 'SQL Server', icon: 'fa-solid fa-database' },
    { name: 'Git', icon: 'fa-brands fa-git-alt' },
    { name: 'Docker', icon: 'fa-brands fa-docker' },
    { name: 'Claude', icon: 'fa-solid fa-wand-magic-sparkles' }
  ];
}
