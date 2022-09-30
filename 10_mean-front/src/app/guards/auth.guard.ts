import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
	providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {
	constructor(private authService: AuthService, private router: Router) {

	}
	canActivate(): Observable<boolean> | boolean {
		return returnNavigateToAuth(this.authService, this.router)
	}
	canLoad(): Observable<boolean> | boolean {
		return returnNavigateToAuth(this.authService, this.router)
	}

}

const returnNavigateToAuth = (authService: AuthService, router: Router) => {
	return authService.validateToken().pipe(tap((valid) => {
		if (!valid) router.navigateByUrl("/auth")
	}));
}

