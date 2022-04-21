import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';
import Swal, {SweetAlertOptions} from 'sweetalert2';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent implements OnInit {

  validateForm!: FormGroup;

  constructor(private fb: FormBuilder,private api: AuthService,) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      nombre: [null, [Validators.required]],
      usuario: [null, [Validators.required]],
      telefono: [null, [Validators.required]],
      identificacion: [null, [Validators.required]],
      correo: [null, [Validators.required]],
      roles: [null, [Validators.required]],
      password: [null, [Validators.required]],
    });
  }

  saveData(){
    if (this.validateForm.valid) {
      const userNew = {
        nombre: this.validateForm.value.nombre,
        nombreUsuario: this.validateForm.value.usuario,
        telefono: this.validateForm.value.telefono,
        cedula: this.validateForm.value.identificacion,
        email: this.validateForm.value.correo,
        roles: [this.validateForm.value.roles],
        password: this.validateForm.value.password,
      }
      this.api.nuevo(userNew).subscribe(data => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Su usuario se ha guardado correctamente',
          showConfirmButton: false,
          timer: 1500
        })
      },
      err => {
       
      });      
    }else{
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }
}
