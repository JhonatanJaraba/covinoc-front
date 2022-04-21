import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/service/token.service';
import { UserService } from 'src/app/service/user.service';
import Swal, {SweetAlertOptions} from 'sweetalert2';


@Component({
  selector: 'app-user-lista',
  templateUrl: './user-lista.component.html',
  styleUrls: ['./user-lista.component.scss']
})
export class UserListaComponent implements OnInit {

  listOfData:any;
  user:any;
  username!:string;
  constructor(
    private api: UserService,
    private apiTokens: TokenService,

  ) { }

  ngOnInit(): void {
    this.username = this.apiTokens.getUserName();
    this.Getuser(this.username);
  }

  remove(i:number,data:any){
    Swal.fire({
      title: '¿Desea eliminar el usuario?',
      text: `${data.nombre}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si',
      cancelButtonText: 'Cancelar'
    }).then((result: { isConfirmed: any; }) => {
      if (result.isConfirmed) {
        this.api.deleteUser(data.id).subscribe(({ data, code }) =>{
          if(code === "204 NO_CONTENT"){
            this.Getuser(this.username);
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: data,
              showConfirmButton: false,
              timer: 1500
            })
          }else{
           
          }
        });
      }
    })
    
  }

  Getuser(user:string){
    this.api.getUser().subscribe(({ data }) =>{
      this.listOfData = data.filter((x: { nombreUsuario: string; }) => x.nombreUsuario != user);
    });
  }
}
