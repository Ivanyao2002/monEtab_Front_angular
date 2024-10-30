import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-list-student',
  standalone: true,
  imports: [
    RouterLink,
    NgIf
  ],
  templateUrl: './list-student.component.html',
  styleUrl: './list-student.component.css'
})
export class ListStudentComponent {
  show: boolean = false;

  showModal(): void {
    this.show = true;
  }

  closeModal(): void {
    this.show = false;
  }

  confirmDelete(): void {
    this.closeModal();
    alert("Eleve supprimé !");
  }
}
