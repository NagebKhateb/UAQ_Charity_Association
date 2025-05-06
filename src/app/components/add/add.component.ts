import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { CommonModule } from '@angular/common';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ChipModule } from 'primeng/chip';
import { SelectModule } from 'primeng/select';
import { DatePickerModule } from 'primeng/datepicker';
import { FileUploadModule } from 'primeng/fileupload';
import { ToastModule } from 'primeng/toast';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-add',
  imports: [
    CommonModule,
    BreadcrumbModule,
    ReactiveFormsModule,
    FormsModule,
    ChipModule,
    SelectModule,
    DatePickerModule,
    FileUploadModule,
    ToastModule,
    InputTextModule,
    ButtonModule,
    RippleModule,
    RouterModule
  ],
  templateUrl: './add.component.html',
  styleUrl: './add.component.scss',
})
export class AddComponent {
  uploadedImage: string | ArrayBuffer | null = null;
  projectTitle: string = '';
  projectDescription: string = '';
  keywords: any[] = [];
  words: any[] = [];
  newKeyword: string = '';
  newKeyword2: string = '';
  showIn: string = '';
  selectPage: string = '';
  startDate: Date | null = null;
  endDate: Date | null = null;
  goalAmount: number = 0;
  smsLink: string = '';
  paymentGatewayLink: string = '';
  bankName: string = '';
  iban: string = '';
  accountNumber: string = '';
  swiftCode: string = '';
  reference: string = '';
  imageUrl: string | ArrayBuffer | null = 'assets/icons/Image Placeholder.svg';
  qrCodeFile: File | null = null;

  showInOptions = [
    { label: 'Standing Project', value: 'standing' },
    { label: 'Current Project', value: 'current' },
  ];

  pageOptions = [
    { label: '1', value: '1' },
    { label: '2', value: '2' },
  ];

  constructor(private messageService: MessageService) {}

  addKeyword() {
    if (this.newKeyword.trim()) {
      this.keywords.push({ label: this.newKeyword });
      this.newKeyword = '';
    }
  }

  removeKeyword(keyword: any) {
    this.keywords = this.keywords.filter((k) => k !== keyword);
  }

  onImageUpload(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.uploadedImage = e.target?.result || null;
      };
      reader.readAsDataURL(file);
    }
  }

  onQRCodeUpload(event: any) {
    this.qrCodeFile = event.files[0];
  }

  publishProject() {
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: 'Project saved successfully!',
    });
  }
}
