import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  form = new FormGroup({
      name : new FormControl('John Doe'),
   email : new FormControl('John@requantive.com'),
    phone : new FormControl(''),
  })
  
  constructor() { }

  ngOnInit(): void {
    this.form.controls.name.disable();
    this.form.controls.email.disable();
  }

}
