import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root',
})
export class AuthService {
	private baseUrl= environment.baseUrl;
	_user: any;
	get user() {
		return this._user;
	}
	constructor(private httpClient: HttpClient) { }
	login(data: { eMail: string; password: string }) {
		return this.httpClient
			.post<any>(`${this.baseUrl}/auth/login`, data)
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
	register(data:any){
		return this.httpClient
		.post<any>(`${this.baseUrl}/auth/register`,data)
		.pipe(
			tap((res)=>{
				if(res.ok===true){
					this._user={
						id:res.id,
						userName:res.userName,
						email:res.email
					};
				} else{
					this._user=null;
				}
			}),
			map((res)=>res.ok),
			catchError((err)=>of(err.error.msg))
		);
	}
	validateToken(): Observable<boolean> {
		const {token} = JSON.parse(localStorage.getItem("user")!);
		if (token) {
			return new Observable((subscriber) => { subscriber.next(true) })
		} else {
			return new Observable((subscriber) => { subscriber.next(false) })
		}
	}
}
