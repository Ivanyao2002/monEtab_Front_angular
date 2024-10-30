import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-add-student',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './add-student.component.html',
  styleUrl: './add-student.component.css'
})
export class AddStudentComponent implements OnInit {
  studentForm!: FormGroup;

  ngOnInit(): void {
    this.studentForm = new FormGroup({
      lastname: new FormControl('', Validators.required),
      firstname: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required),
      matricule: new FormControl('', Validators.required),
      birthday: new FormControl('', Validators.required),
      phone_number: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      url_picture: new FormControl('', Validators.required),
      phone_number_father: new FormControl('', Validators.required),
    })
  }
    submit() {
      console.log(this.studentForm.value)
    }

    isInvalid(field: AbstractControl) {
      return field.invalid && (field.touched || field.dirty);
    }
}
