import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root',
})
export class TaskCrudService {
	private baseUrl = environment.baseUrl;

	private _user: any = JSON.parse(localStorage.getItem('user')!);
	get user() {
		return this._user;
	}

	constructor(private httpClient: HttpClient) {}
	read() {
		const headers = { 'x-auth-token': this.user.token };
		return this.httpClient.get<any>(`${this.baseUrl}/task`, { headers });
	}
	delete(id: string) {
		const headers = { 'x-auth-token': this.user.token };
		return this.httpClient.delete<any>(`${this.baseUrl}/task/${id}`, {
			headers,
		});
	}
	create(data: any) {
		const headers = { 'x-auth-token': this.user.token };
		return this.httpClient.post<any>(
			`${this.baseUrl}/task`,
			{ name: data.newTaskName!, description: data.newTaskDescription! },
			{ headers }
		);
	}
	getTaskById(id: string) {
		const headers = { 'x-auth-token': this.user.token };
		return this.httpClient.get<any>(`${this.baseUrl}/task/${id}`, {
			headers,
		});
	}
	update(data: any,id:string) {
		const headers = { 'x-auth-token': this.user.token };
		return this.httpClient.put<any>(
			`${this.baseUrl}/task/${id}`,
			{
				name: data.taskToUpdateName,
				description: data.taskToUpdateDescription,
			},
			{ headers }
		);
	}
}
