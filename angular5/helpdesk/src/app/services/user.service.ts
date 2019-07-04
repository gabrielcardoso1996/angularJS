import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import { User } from '../services/model/user.model';
import {API} from './helpdesk.api';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: Http) { }

  login(user: User){
    return this.http.post(`${API}/user`, user);    
  }

  createOrUpdate(user: User){
    if (user.id != null && user.id != 0){
      return this.http.put(`${API}/user/${user.id}`, user);
    }else{
      user.id = 0;
      return this.http.post(`${API}/user`, user);
    }
  }

  findAll(page: number, count: number){
    return this.http.get(`${API}/user/${page}/${count}`);
  }

  findById(id: number){
    return this.http.get(`${API}/user/${id}`);
  }

  delete(id: number){
    return this.http.delete(`${API}/user/${id}`);
  }
}
