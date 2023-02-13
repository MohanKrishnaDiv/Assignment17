import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RegisterComponentComponent } from './register-component/register-component.component';


@Injectable({
  providedIn: 'root'
})
export class UsersdataService {
  dataUrl:string;
  formGroupData:any[]=[];

  constructor(private http:HttpClient) {
    this.dataUrl='http://localhost:3000/usersdata'
   }
   addUser(user:object):Observable<RegisterComponentComponent>{
    return this.http.post<RegisterComponentComponent>(this.dataUrl,user)

   }
   getAllUsers():Observable<RegisterComponentComponent[]>{
    return this.http.get<RegisterComponentComponent[]>(this.dataUrl)

   }
   getformGroupData(data:any){
      this.formGroupData.push(data)
   }
   

}

