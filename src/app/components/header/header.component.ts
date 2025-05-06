import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  navItems = [
    { name: 'Manage User', icon: 'Manage Users.svg' },
    { name: 'Beneficiary', icon: 'Beneficiary.svg' },
    { name: 'News', icon: 'News.svg' },
    { name: 'Transaction', icon: 'Transaction.svg' },
    { name: 'Projects', icon: 'Projects.svg' },
  ];
}
