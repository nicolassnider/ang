import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
	selector: 'app-login-screen',
	templateUrl: './login-screen.component.html',
	styleUrls: ['./login-screen.component.css'],
})
export class LoginScreenComponent implements OnInit {
	loginForm: FormGroup = this.fb.group({
		eMail: ['example@mail.com', [Validators.required, Validators.email]],
		password: ['123456', [Validators.required, Validators.minLength(6)]],
	});
	constructor(
		private fb: FormBuilder,
		private router: Router,
		private authServive: AuthService
	) {}

	ngOnInit(): void {}

	login() {
		this.authServive
			.login(this.loginForm.value)
			.subscribe((res: any) => {
				console.log(res);
			});
		//this.router.navigateByUrl('/task');
	}
}
