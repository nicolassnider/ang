import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
require('dotenv').config();

@Injectable({
	providedIn: 'root',
})
export class AuthService {
	constructor(private httpClient: HttpClient) {}
	login(data:{eMail:string, password:string}) {
		const { eMail, password } = data;
		return this.httpClient.post(`${process.env['API_URL']}/auth/login`, data);
	}
}
