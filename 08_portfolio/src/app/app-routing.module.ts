import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/* const routes: Routes = [{
	path:'',
	loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule), // Lazy loading
}];*/

const routes: Routes = [
	{
		path: 'projects',
		loadChildren: () =>
			import('./projects/projects.module').then((m) => m.ProjectsModule), // host/projects
	},
	{
		path:'contact',
		loadChildren: () =>
			import('./contact/contact.module').then((m) => m.ContactModule), // host/contact
	},
	{
		path:'about',
		loadChildren: () =>
			import('./about/about.module').then((m) => m.AboutModule), // host/about
	},
	{
		path: '**',
		redirectTo:'projects' // 404 o redireccionar
	}
];
@NgModule({
	imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
	exports: [RouterModule],
})
export class AppRoutingModule {}
