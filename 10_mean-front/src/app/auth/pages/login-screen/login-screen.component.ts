import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
	selector: 'app-login-screen',
	templateUrl: './login-screen.component.html',
	styleUrls: ['./login-screen.component.css'],
})
export class LoginScreenComponent implements OnInit {
	loginForm: FormGroup = this.fb.group({
		eMail: ['', [Validators.required, Validators.email]],
		password: ['', [Validators.required, Validators.minLength(6)]],
	});
	constructor(
		private fb: FormBuilder,
		private router: Router,
		private authService: AuthService
	) {}

	ngOnInit(): void {}

	login() {
		this.authService.login(this.loginForm.value).subscribe((res: any) => {
			if (res===true) {
				localStorage.setItem(
					'user',
					JSON.stringify(this.authService.user)
				);
				this.router.navigateByUrl('/task');
			} else {
				Swal.fire({title:'Error...',icon:'error',text:res});
			}
		});

	}
}
