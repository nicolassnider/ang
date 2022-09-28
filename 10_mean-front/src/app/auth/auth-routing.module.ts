import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginScreenModule } from './pages/login-screen/login-screen.module';
import { RegisterScreenModule } from './pages/register-screen/register-screen.module';

const routes: Routes = [
	{ path: 'login', component: LoginScreenModule },
	{ path: 'regiser', component: RegisterScreenModule },
	{ path: '**', redirectTo: 'login' },
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class AuthRoutingModule {}
