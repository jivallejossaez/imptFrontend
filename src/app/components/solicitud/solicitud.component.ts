import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service'
import { LaboratorioService } from '../../services/laboratorio.service';
import { SolicitudService } from '../../services/solicitud.service';
import { HorarioService} from '../../services/horario.service';
import { Http, Response, Headers} from '@angular/http';
import { Laboratorio } from '../models/laboratorio';
import { Periodo } from '../models/periodo';
import { Solicitud } from '../models/solicitud';
import { rutValidate, rutFormat } from 'rut-helpers';
import { Ng2Rut } from 'ng2-rut';
@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.component.html',
  styleUrls: ['./solicitud.component.css'],
  providers: [UsuarioService,LaboratorioService, HorarioService, SolicitudService]
})
export class SolicitudComponent implements OnInit {
  public identity;
  public token;
  public dias = ["Lunes","Martes","Miércoles","Jueves","Viernes"];
  public horarios=["08:10-09:40","09:50-11:20","11:30-13:00","14:10-15:40","15:50-17:20","17:30-19:00"];
  public solicitudes:Array<any> = [];
  public periodos:Array<Periodo> = new Array<Periodo>();
  public laboratorios:Array<any>;
  public status;
  public seleccionado;
  public horarioslaboratorios:Array<any>= [];
  public horariosSeleccionados:Array<any> =[];
  public listadosolicitudes:Array<any>;
  public solicitud;
	constructor(private http:Http, private _usuarioService:UsuarioService, private _laboratorioService:LaboratorioService,
    private _horarioService:HorarioService, private _solicitudService:SolicitudService) {
    this.identity = _usuarioService.getIdentity();
    this.token = _usuarioService.getToken();
    this.obtenerSolicitudesCompletas();
    this.anadirperiodos();
    this.obtenerLaboratorios();
    this.obtenerHorarios();
	}

	ngOnInit() {
	}
  obtenerLaboratorios(){
    this._laboratorioService.getLaboratorios(this.token).subscribe(
      response =>{
        this.laboratorios = response.data;

      },
      error => {
        console.log(<any>error);
      }
    );
  }
  obtenerHorarios(){
    this._horarioService.getHorarios(this.token).subscribe(
      response =>{
        this.horarioslaboratorios = response.data;
      },
      error => {
        console.log(<any>error);
      }
    );
  }
  anadirperiodos(){
    for(let i = 0; i<6; i++){
      for(let j=0; j<5; j++){
        let temp = new Periodo(false,j,i);
        this.periodos.push(temp);
      }
    }
  }
  cambiarestado(k){
    for (let i = 0; i < this.periodos.length; i++) {
        if(i == k){
          this.periodos[k].estado = !this.periodos[k].estado;
        }
        else{
          this.periodos[i].estado = false;
        }
    }
    console.log(this.listadosolicitudes);
  }


  horariodellaboratorio(){
    for(let i = 0; i<this.horarioslaboratorios.length; i++){
      if(this.seleccionado.idLaboratorio == this.horarioslaboratorios[i].refLaboratorio.idLaboratorio){
          this.horariosSeleccionados.push(this.horarioslaboratorios[i]);
      }
    }
  }


  generarsolicitudes(){
    this.solicitudes= [];
    for(let p=0; p<30;p++){
      if(this.periodos[p].estado){
        let temp:Solicitud = new Solicitud("pendiente",0,this.horariosSeleccionados[p].idHorario);
        this.solicitudes.push(temp);
      }
    }
  }
  enviarsolicitudes(){
    for(let s=0; s<this.solicitudes.length; s++){
      this._solicitudService.registrar(this.token,this.solicitudes[s]).subscribe(
        response => {
          this.status = response.status;
          if(this.status!= 'success'){
            this.status = 'error';
          }
          else{
            console.log("se envio la solicitud");
          }
        },
        error => {
          console.log(<any>error);
        }
      );
      window.location.href = '/solicitudes';
    }
  }
  obtenerSolicitudesCompletas(){
    this._solicitudService.listadocompleto(this.token).subscribe(
      response =>{
        this.listadosolicitudes = response.data;
        console.log(this.listadosolicitudes)
      },
      error => {
        console.log(<any>error);
      }
    );
  }

}
