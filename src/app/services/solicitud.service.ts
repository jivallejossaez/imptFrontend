import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import "rxjs/add/operator/map";
import {Observable} from 'rxjs/Observable';
import { environment } from '../../environments/environment';

@Injectable()
export class SolicitudService {
  public url:string;

	constructor(private _http: Http){

	}

  registrar(token,solicitud){
    let json = JSON.stringify(solicitud);
    let params = "authorization="+token+"&json="+json;
    let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});

		return this._http.post(environment.url+'/solicitud/new',params,{headers: headers})
		.map(res => res.json());
	}
  listado(token){
    let params = "authorization="+token;
		let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});
		return this._http.post(environment.url+'/solicitud/list',params,{headers: headers}).map(res => res.json());
	}
  listadocompleto(token){
    let params = "authorization="+token;
    let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});
    return this._http.post(environment.url+'/solicitud/listall',params,{headers: headers}).map(res => res.json());
  }
  update(solicitud){
    let json = JSON.stringify(solicitud);
    let params = "json="+json;
    let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});
    return this._http.post(environment.url+'/solicitud/edit',params,{headers: headers}).map(res => res.json());

  }
}
