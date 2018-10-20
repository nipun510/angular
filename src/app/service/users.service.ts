import { Injectable } from '@angular/core';

import { User } from '../shared/user';

import { Observable, of} from 'rxjs';
import { delay } from "rxjs/operators";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private url = "https://localhost:3443/users";
  constructor(private http: HttpClient) { }

  getUsers():Observable<User[] | any> {
    return  this.http.get (this.url);

  }
}
