import { Injectable } from '@angular/core';
import {HttpClient, HttpParams, HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  path = environment.URL; 

  constructor(private http: HttpClient) { }

  getUser():Observable<any>{
    return this.http.get<any>(`${environment.URL}user/getusuarios`);
  }

  deleteUser(id:number):Observable<any>{
    return this.http.delete<any>(`${environment.URL}user/deleteusuario?id=${id}`)
  }

  getUserById(id:number):Observable<any>{
    return this.http.get<any>(`${environment.URL}user/user/${id}`)
  }

  putUser(usuario:any): Observable<any> {
    return this.http.put<any>(this.path + 'user/update_usuario', usuario);
  }

}
