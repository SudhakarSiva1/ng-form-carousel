import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.class';


@Injectable({ providedIn: 'root' })
export class UserService {

    constructor(private http: HttpClient) { }

    register(user: User) {
        user.status = 'Active';
        return this.http.post(`https://gorest.co.in/public/v2/users`, user);
    }
}