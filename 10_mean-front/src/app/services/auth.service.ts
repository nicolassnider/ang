import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class AuthService {
	private _user: any;
	get user() {
		return this._user;
	}
	constructor(private httpClient: HttpClient) {}
	login(data: { eMail: string; password: string }) {
		return this.httpClient
			.post<any>('http://localhost:3000/auth/login', data)
			.pipe(
				tap((res) => {
					if (res.ok === true) {
						this._user = {
							userName: res.userName,
							id: res.id,
							token: res.token,
						};
					} else {
						this._user = null;
					}
				}),
				map((res) => res.ok),
				catchError((err) => of(err.error.msg))
			);
	}
}
