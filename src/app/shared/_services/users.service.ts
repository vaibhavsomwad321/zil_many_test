import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iuser } from '../model/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  API ='https://zil-test.s3.us-east-1.amazonaws.com/json-data.json';
  constructor(private _http:HttpClient) { }
  getAllUsers():Observable<Iuser[]>{
    return this._http.get<Iuser[]>(this.API);
  }
}
