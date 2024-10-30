import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {NgIf} from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    NgIf,
    RouterLink
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  showAlert:boolean = false;
  constructor(private titleService: Title) {}

  login(): void {
    this.showAlert = true;
  }

  closeAlert(): void {
    this.showAlert = false;
  }

  ngOnInit(): void {
    this.titleService.setTitle('MonEtab - Login');
  }

}
