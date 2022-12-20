import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormControlDirective, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup; 
  customer: any = {};
  constructor(private fb: FormBuilder) {}


  ngOnInit(): void {
  }


  registerCustomer() {

  }


  createRegisterForm() {
    this.registerForm = this.fb.group({
      username: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(8)]],
      cnfPassword: [null, Validators.required],
    })

  }


  onSubmit() {
    console.log(this.registerForm?.value);
    this.customer = Object.assign(this.customer, this.registerForm);
    localStorage.setItem('Customer', JSON.stringify(this.customer));
  }

  
  get username() {
    return this.registerForm?.get('username') as FormControl;
  }
  
  get email() {
    return this.registerForm?.get('email') as FormControl;
  }
  get password() {
    return this.registerForm?.get('password') as FormControl;
  }
  get confirmPassword() {
    return this.registerForm?.get('cnfpassword') as FormControl;
  }



}
