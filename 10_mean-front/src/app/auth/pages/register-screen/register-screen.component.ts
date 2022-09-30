import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
	selector: 'app-register-screen',
	templateUrl: './register-screen.component.html',
	styleUrls: ['./register-screen.component.css'],
})
export class RegisterScreenComponent implements OnInit {
	registerForm: FormGroup = this.fb.group({
		eMail: ['', [Validators.required]],
		userName: ['', [Validators.required]],
		password: ['', [Validators.required]],
		password2: ["", [Validators.required]]
	});

	constructor(
		private fb: FormBuilder,
		private router: Router,
		private authService: AuthService
	) { }
	ngOnInit(): void { }
	register() {
		const { password, password2 } = this.registerForm.value;
		if (password === password2) {
			this.authService.login(this.registerForm.value).subscribe((res: any) => {
				if (res === true) {
					localStorage.setItem(
						'user',
						JSON.stringify(this.authService.user)
					);
					this.router.navigateByUrl('/task');
				} else {
					Swal.fire({ title: 'Error...', icon: 'error', text: res });
				}
			});

		} else {
			Swal.fire({ title: 'Error...', icon: 'error', text: "passwords does not match" });
		}

	}


}
