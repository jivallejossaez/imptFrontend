import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { Periodo } from '../models/periodo';
import { Laboratorio } from '../models/laboratorio';
import { LaboratorioService } from '../../services/laboratorio.service';
import { SolicitudService } from '../../services/solicitud.service';
import { ResponsableService } from '../../services/responsable.service';
import { Http, Response, Headers} from '@angular/http';
@Component({
  selector: 'app-gestionlaboratorios',
  templateUrl: './gestionlaboratorios.component.html',
  styleUrls: ['./gestionlaboratorios.component.css'],
  providers: [LaboratorioService, SolicitudService, ResponsableService]
})
export class GestionlaboratoriosComponent implements OnInit {
  public dias = ["Lunes","Martes","Miércoles","Jueves","Viernes"];
  public horarios=["08:10-09:40","09:50-11:20","11:30-13:00","14:10-15:40","15:50-17:20","17:30-19:00"];
  public periodos:Array<Periodo> = new Array<Periodo>();
  public identityresponsable;
  public tokenresponsable;
  public seleccionado:Laboratorio;
  public laboratorios:Array<Laboratorio>;
  public solicitudes:Array<any>;
  public solicitudseleccionada;
  public status;
  constructor(private _route: ActivatedRoute, private _router: Router,private http:Http, private _laboratorioService:LaboratorioService, private _solicitudService:SolicitudService, private _responsableService:ResponsableService) {
    this.anadirperiodos();
    this.identityresponsable = _responsableService.getIdentity();
    this.tokenresponsable = _responsableService.getToken();
    this.obtenerLaboratorios();
    this.obtenerSolicitudes();

 }

  ngOnInit() {
  }

  anadirperiodos(){
    for(let i = 0; i<6; i++){
      for(let j=0; j<5; j++){
        let temp = new Periodo(false,j,i);
        this.periodos.push(temp);
      }
    }
  }
  obtenerLaboratorios(){
    this._laboratorioService.listadoResponsable(this.tokenresponsable).subscribe(
      response =>{
        this.laboratorios = response.data;
      },
      error => {
        console.log(<any>error);
      }
    );
  }
  obtenerSolicitudes(){
    this._solicitudService.listadocompleto(this.tokenresponsable).subscribe(
      response =>{
        this.solicitudes = response.data;
      },
      error => {
        console.log(<any>error);
      }
    );
  }
  asignar(s){
    this.solicitudseleccionada = this.solicitudes[s];
  }
  actualizar(respuesta){
    this.solicitudseleccionada.estado = respuesta;
    this._solicitudService.update(this.solicitudseleccionada).subscribe(
      response =>{
        this.status = response.status;
        if(response.status != 'success'){
          this.status= 'error';
        }
      },
      error =>{
        console.log(<any>error)
      }
    );
  }
}
