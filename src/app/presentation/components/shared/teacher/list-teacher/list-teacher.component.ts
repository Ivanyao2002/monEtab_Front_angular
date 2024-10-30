import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-list-teacher',
  standalone: true,
  imports: [
    RouterLink,
    NgIf
  ],
  templateUrl: './list-teacher.component.html',
  styleUrl: './list-teacher.component.css'
})
export class ListTeacherComponent {
  show: boolean = false;

  showModal(): void {
    this.show = true;
  }

  closeModal(): void {
    this.show = false;
  }

  confirmDelete(): void {
    this.closeModal();
    alert("Professeur supprimé !");
  }
}
