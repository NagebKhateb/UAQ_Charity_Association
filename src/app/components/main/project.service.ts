import { Injectable } from '@angular/core';
import { Project } from './project.model';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private projects: Project[] = [
    {
      id: 1,
      title: 'Upgent Medical Appeal: Support a Sister in Need of Surgery',
      description:
        'Help us raise funds for a life-saving surgery for our sister in need.',
      label: 'Standing Project',
      imageUrl: 'assets/images/Upgent Medical Appeal.jpg',
    },
    {
      id: 2,
      title: 'Healing Hands: Join Us in Supporting a Sister`s Surgical Journey',
      description:
        'Support her journey to recovery with your generous donations.',
      label: 'Standing Project',
      imageUrl: 'assets/images/Healing Hands.jpg',
    },
    {
      id: 3,
      title: 'Current Project',
      description: 'Our current focus project that needs immediate attention.',
      label: 'Current Project',
      imageUrl: 'assets/images/Current Project.jpg',
    },
    {
      id: 4,
      title:
        'I couldn’t afford the costs of the wheelchair for my daughter, so...',
      description:
        'Help us provide a wheelchair for this young girl in desperate need.',
      label: 'Standing Project',
      imageUrl: 'assets/images/wheelchair.jpg',
    },
  ];

  getProjects(): Project[] {
    return this.projects;
  }

  deleteProject(id: number): void {
    this.projects = this.projects.filter((project) => project.id !== id);
  }
}
