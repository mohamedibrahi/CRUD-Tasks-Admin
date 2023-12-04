import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'projects/admin/src/environments/environment';
import { BehaviorSubject } from 'rxjs';
export interface ChangeStatus {
  id: string;
  status: string;
}
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  userData = new BehaviorSubject({});
  constructor(private http: HttpClient) { }

  getUsers(filter: any) {
    let params = new HttpParams()
    if (filter) {
      Object.entries(filter).forEach(([key, value]: any) => {
        params = params.append(key, value)
      })
    }
    return this.http.get(environment.baseApi.replace('/tasks', '/auth') + '/users', { params });
  }

  deleteUser(id: any) {
    return this.http.delete(environment.baseApi.replace('/tasks', '/auth') + '/user/' + id);
  }

  changeStatus(model: ChangeStatus) {
    return this.http.put(environment.baseApi.replace('/tasks', '/auth') + '/user-status', model);
  }

  getAllUsers(model?: any) {

    this.getUsers(model).subscribe((res: any) => {
      this.userData.next({
        data: res.users,
        total: res.totalItems
      })
    })
  }
}
