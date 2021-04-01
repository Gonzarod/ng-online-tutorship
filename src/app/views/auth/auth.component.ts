import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {IAuthResponse} from '../../interfaces/auth-response';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder,private authService: AuthService, private router: Router,private toastr: ToastrService) { }

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
      this.toastr.error('Usuario o contraseña no válidos', 'Error!',{"positionClass": "toast-top-right"});
    }
  }

  signIn(): void {
    this.authService.signIn(this.loginForm.getRawValue())
      .subscribe({
        error: (err) => console.log(err),
        next: (res) => {
          console.log(res);
          this.setToken(res.data);
          this.authService.setIsLogged(true);
        },
        complete: () => console.log('Completado')
      });
  }

  setToken(res: IAuthResponse): void {
    this.authService.setToken(res.token);
    this.goHome();
  }

  goHome(): void {
    this.router.navigateByUrl('/list');
  }

}
