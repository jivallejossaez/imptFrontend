import { ModuleWithProviders} from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { RegistroComponent } from './components/registro/registro.component';
import { SolicitudComponent } from './components/solicitud/solicitud.component';
import { LoginusuarioComponent } from './components/loginusuario/loginusuario.component';
import { LoginresponsableComponent} from './components/loginresponsable/loginresponsable.component';
import { GestionlaboratoriosComponent } from './components/gestionlaboratorios/gestionlaboratorios.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SolicitudesComponent} from './components/solicitudes/solicitudes.component';
import { InicioComponent} from './components/inicio/inicio.component';

const APP_ROUTES: Routes= [
	{ path: 'registro', component: RegistroComponent },
	{ path: 'solicitud', component: SolicitudComponent },
	{ path: 'solicitudes', component: SolicitudesComponent },
	{ path: 'loginusuario/:id', component: LoginusuarioComponent },
	{ path: 'loginusuario', component: LoginusuarioComponent },
  { path: 'loginresponsable', component: LoginresponsableComponent},
  { path: 'gestionlaboratorios', component: GestionlaboratoriosComponent},
  { path: 'dashboard', component: DashboardComponent},
	{ path: 'inicio', component: InicioComponent},
	{ path: '**', component:InicioComponent},
	{ path: '', component:InicioComponent}
];

//export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
export const appRoutingProviders: any[]=[];
export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
