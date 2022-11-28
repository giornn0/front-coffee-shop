import { Component } from '@angular/core';
import { AbstractControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Form } from '../core/forms/form';
import { LoggedService } from '../core/services/logged.service';
import { LoginForm } from './login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent extends Form<LoginForm> {
  override keys: (keyof LoginForm)[] = ['email', 'password'];
  constructor(private loginService: LoggedService, private router: Router) {
    super();
  }

  get email(): AbstractControl | null {
    return this.getControl('email');
  }
  get password(): AbstractControl | null {
    return this.getControl('password');
  }
  override ngOnInit(): void {
    this.startBasicForm();
    this.email?.addValidators([Validators.required, Validators.email]);
    this.password?.addValidators([Validators.required]);
  }

  submit() {
    this.loginService.login(this.form.value).subscribe({
      next: (_) => {
        this.router.navigate(['home']);
      },
    });
  }
}
