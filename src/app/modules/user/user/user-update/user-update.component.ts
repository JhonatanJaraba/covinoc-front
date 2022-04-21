import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import Swal, {SweetAlertOptions} from 'sweetalert2';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.scss']
})
export class UserUpdateComponent implements OnInit {

  validateForm!: FormGroup;
  listOfData: any;
  selectedRol: any;
  nombre!: string;
  usuario!: string;
  telefono!: string;
  email!: string;
  identificacion!: string;
  public id:any;

  constructor(private fb: FormBuilder,private api: UserService,private route: ActivatedRoute,private router: Router,) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.validateForm = this.fb.group({
      nombre: [null, [Validators.required]],
      usuario: [null, [Validators.required]],
      telefono: [null, [Validators.required]],
      identificacion: [null, [Validators.required]],
      correo: [null, [Validators.required]],
      roles: [null, [Validators.required]],
    });

    this.cargarUser(this.id);

  }

  cargarUser(id:number){
    this.api.getUserById(id).subscribe(({ data }) =>{
      this.listOfData = data;
      console.log(this.listOfData);
      this.nombre = data.nombre;
      this.usuario = data.nombreUsuario;
      this.telefono = data.telefono;
      this.identificacion = data.cedula;
      this.email = data.email;
      if(data.roles[0].rolNombre === "ROLE_ADMIN"){
        this.selectedRol = 'admin';
      }else if(data.roles[0].rolNombre === "ROLE_USER"){
        this.selectedRol = 'user';
      }
      
    });
  }

  saveData(){
    
    if (this.validateForm.valid) {
      console.log("entro");
      const userNew = {
        id: this.id,
        nombre: this.validateForm.value.nombre,
        nombreUsuario: this.validateForm.value.usuario,
        telefono: this.validateForm.value.telefono,
        cedula: this.validateForm.value.identificacion,
        email: this.validateForm.value.correo,
        roles: this.validateForm.value.roles,
      }
      Swal.fire({
        title: '¿Desea actualizar el usuario?',
        text: `${this.nombre}`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Si',
        cancelButtonText: 'Cancelar'
      }).then((result: { isConfirmed: any; }) => {
        if (result.isConfirmed) {
          this.api.putUser(userNew).subscribe(({ data }) =>{
            console.log(data);
            this.router.navigate(['/main/user']);
          }); 
        }
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
