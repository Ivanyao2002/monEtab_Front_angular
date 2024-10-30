import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-add-teacher',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './add-teacher.component.html',
  styleUrl: './add-teacher.component.css'
})
export class AddTeacherComponent implements OnInit {
  teacherForm!: FormGroup;

  ngOnInit(): void {
    this.teacherForm = new FormGroup({
      lastname: new FormControl('', Validators.required),
      firstname: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required),
      birthday: new FormControl('', Validators.required),
      phone_number: new FormControl('', Validators.required),
      url_picture: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      available: new FormControl('', Validators.required),
      speciality: new FormControl('', Validators.required),
    })
  }
    submit() {
      console.log(this.teacherForm.value)
    }

    isInvalid(field: AbstractControl) {
      return field.invalid && (field.touched || field.dirty);
    }
}
