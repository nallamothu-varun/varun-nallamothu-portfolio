import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class ContactComponent {
  channels = [
    { label: 'Email', value: 'varun.nallamothu25@gmail.com', href: 'mailto:varun.nallamothu25@gmail.com', icon: 'fa-solid fa-envelope', external: false },
    { label: 'Phone', value: '+91 7893395129', href: 'tel:+917893395129', icon: 'fa-solid fa-phone', external: false },
    { label: 'LinkedIn', value: 'varun-nallamothu', href: 'https://www.linkedin.com/in/varun-nallamothu/', icon: 'fa-brands fa-linkedin-in', external: true }
  ];
}
