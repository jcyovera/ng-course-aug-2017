import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss']
})
export class RegisterUserComponent implements OnInit {
  user: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.user = this.getRegisterform();
  }
  getRegisterform(): any {
    return this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      account: this.formBuilder.group({
        email: ['', Validators.required],
        confirm: ['', Validators.required]
      })
    });
  }
  onSubmit({ value, valid }: { value: any, valid: boolean }) {
    console.log(value, valid)
  }
}
