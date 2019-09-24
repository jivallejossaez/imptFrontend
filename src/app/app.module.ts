import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef, LOCALE_ID  } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
//Routing
import { routing, appRoutingProviders } from './app.routes';
//rut
import { Ng2Rut } from 'ng2-rut';
// Graficos
import { ChartsModule } from 'ng2-charts';
//Componentes
import { AppComponent } from './app.component';
import { RegistroComponent } from './components/registro/registro.component';
import { LoginusuarioComponent } from './components/loginusuario/loginusuario.component';
import { LoginresponsableComponent } from './components/loginresponsable/loginresponsable.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { SolicitudComponent } from './components/solicitud/solicitud.component';
import { GestionlaboratoriosComponent } from './components/gestionlaboratorios/gestionlaboratorios.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SolicitudesComponent } from './components/solicitudes/solicitudes.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { HeaderalumnosComponent } from './components/shared/headeralumnos/headeralumnos.component';
import { HeaderencargadosComponent } from './components/shared/headerencargados/headerencargados.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    LoginusuarioComponent,
    LoginresponsableComponent,
    FooterComponent,
    HeaderComponent,
    SolicitudComponent,
    GestionlaboratoriosComponent,
    DashboardComponent,
    SolicitudesComponent,
    InicioComponent,
    HeaderalumnosComponent,
    HeaderencargadosComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    Ng2Rut,
    ChartsModule
  ],
  providers: [appRoutingProviders, { provide: LOCALE_ID, useValue: "esCL"}],
  bootstrap: [AppComponent]
})
export class AppModule { }
