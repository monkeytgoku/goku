import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class UserFormComponent implements OnInit {
  userFg!: FormGroup;
  hidePassword = true;
  roles  = ['S-Admin', 'Admin', 'Vendor', 'Customer'];

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initUserForm();
  }

  initUserForm(): void {
    this.userFg = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      name: ['', Validators.required],
      email: ['', Validators.required, Validators.email],
      gender: ['male'],
      phone: [''],
      address: [''],
      birthday: [''],
      avatar: [''],
      roles: [[]],
      isActive: [true],
    });
  }

  onSubmit(): void {

  }
}
