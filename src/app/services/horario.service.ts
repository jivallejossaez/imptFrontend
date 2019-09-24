import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import "rxjs/add/operator/map";
import {Observable} from 'rxjs/Observable';
import { environment } from '../../environments/environment';

@Injectable()
export class HorarioService {
  public url:string;

	constructor(private _http: Http){

	}

	getHorarios(token){
		let params = "authorization="+token;
		let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});
		return this._http.post(environment.url+'/horario/list',params,{headers: headers}).map(res => res.json());

	}

}
