import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import "rxjs/add/operator/map";
import {Observable} from 'rxjs/Observable';
import { environment } from '../../environments/environment';

@Injectable()
export class LaboratorioService{
	public url:string;

	constructor(private _http: Http){

	}

	getLaboratorios(token){
		let params = "authorization="+token;
		let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});
		return this._http.post(environment.url+'/laboratorio/list',params,{headers: headers}).map(res => res.json());

	}
	listadoResponsable(token){
		let params = "authorization="+token;
		let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});
		return this._http.post(environment.url+'/laboratorio/listresponsable',params,{headers: headers}).map(res => res.json());
	}
}
