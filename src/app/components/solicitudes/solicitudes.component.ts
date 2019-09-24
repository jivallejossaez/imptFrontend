import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { SolicitudService } from '../../services/solicitud.service';
import { UsuarioService } from '../../services/usuario.service';
import { Http, Response, Headers} from '@angular/http';

@Component({
  selector: 'app-solicitudes',
  templateUrl: './solicitudes.component.html',
  styleUrls: ['./solicitudes.component.css'],
  providers: [UsuarioService, SolicitudService]
})
export class SolicitudesComponent implements OnInit {
  public identity;
  public token;
  public solicitudes:Array<any>;
  public solicitudseleccionada;
  constructor(private _route: ActivatedRoute, private _router: Router,private http:Http, private _usuarioService:UsuarioService, private _solicitudService:SolicitudService) {
    this.identity = _usuarioService.getIdentity();
    this.token = _usuarioService.getToken();
    this.obtenerSolicitudes();
  }

  ngOnInit() {
  }
  redireccionar(){
    this._router.navigate(['./solicitud']);
  }
  obtenerSolicitudes(){
    this._solicitudService.listado(this.token).subscribe(
      response =>{
        this.solicitudes = response.data;
      },
      error => {
        console.log(<any>error);
      }
    );
  }
  asignar(s){
    this.solicitudseleccionada =this.solicitudes[s];
  }
}
