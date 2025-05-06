import { Component, OnInit } from '@angular/core';
import { Project } from './project.model';
import { ProjectService } from './project.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { HeaderComponent } from '../header/header.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main',
  imports: [
    ConfirmDialogModule,
    ToastModule,
    ButtonModule,
    HeaderComponent,
    CommonModule,
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent implements OnInit {
  projects: Project[] = [];

  constructor(
    private projectService: ProjectService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.projects = this.projectService.getProjects();
  }

  confirmDelete(event: Event, projectId: number) {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'Are you sure you want to delete this project?',
      header: 'Delete Project',
      acceptLabel: 'Delete',
      rejectLabel: 'No',
      acceptButtonStyleClass: 'p-button-danger',
      rejectButtonStyleClass: 'p-button-text',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.projectService.deleteProject(projectId);
        this.projects = this.projectService.getProjects();
        this.messageService.add({
          severity: 'error',
          summary: 'Success',
          detail: 'Project Deleted Successfully!',
        });
      },
    });
  }
}
