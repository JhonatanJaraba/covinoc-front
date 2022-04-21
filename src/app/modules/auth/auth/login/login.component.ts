import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginUsuario } from 'src/app/models/login-usuario';
import { AuthService } from 'src/app/service/auth.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  validateForm!: FormGroup;
  passwordVisible = false;
  password?: string;

  loginUsuario!: LoginUsuario;

  constructor(private fb: FormBuilder,
    private tokenService: TokenService,
    private authService: AuthService,
    private router: Router,) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    });
  }

  submitForm() {
    console.log("viendo");
    this.loginUsuario = new LoginUsuario(this.validateForm.value.userName, this.validateForm.value.password);
    this.authService.login(this.loginUsuario).subscribe(
      data => {
        this.tokenService.setToken(data.token);
        this.router.navigate(['/main']);
      },
      err => {
       
      }
    );
  }

  array = ['Nuestro pensamiento estratégico se centra en realizar gestiones rentables con crecimiento permanente.',
    'Es una plataforma exclusiva para nuestros afiliados que les permite de una manera fácil administrar, controlar y gestionar la cartera asignada a Covinoc.',
    'Es la plataforma digital que permite a nuestros clientes conocer sus obligaciones y proponer acuerdos de pago de una forma fácil, rápida y segura.',];

}
