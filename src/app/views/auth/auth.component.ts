import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {IAuthResponse} from '../../model/auth-response';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder,private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['',[Validators.required,Validators.maxLength(50)]],
      password: ['',[Validators.required,Validators.maxLength(200)]],
    })
  }

  onSubmit(){
    if (this.loginForm.valid) {
      console.log(this.loginForm.getRawValue());
      this.signIn();
    } else {
      alert("error")
    }
  }

  signIn(): void {
    this.authService.signIn(this.loginForm.getRawValue())
      .subscribe({
        error: (err) => console.log(err),
        next: (res) => {
          console.log(res)
          this.setToken(res.data)
        },
        complete: () => console.log('Completado')
      });
  }

  setToken(res: IAuthResponse): void {
    localStorage.setItem('token', res.token);
    this.goHome();
  }

  goHome(): void {
    this.router.navigateByUrl('/home');
  }

}
