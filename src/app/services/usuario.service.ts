import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import "rxjs/add/operator/map";
import {Observable} from 'rxjs/Observable';
import { environment } from '../../environments/environment';

@Injectable()
export class UsuarioService{
	public url: string;
	public identity;
	public token;

	constructor(private _http: Http){
	}

	signup(user_to_login){
		let json = JSON.stringify(user_to_login);
		let params = "json="+json;
		let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});
		return this._http.post(environment.url+'/loginUsuario',params,{headers: headers})
		.map(res => res.json());
	}
	registrar(usuario){
		let json = JSON.stringify(usuario);
		let params = "json="+json;
		let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});

		return this._http.post(environment.url+'/usuario/new',params,{headers: headers})
		.map(res => res.json());
	}
	getIdentity(){
		let identity = JSON.parse(localStorage.getItem('identity'));
		if(identity !="undefined"){
			this.identity = identity;
		}
		else{
			this.identity = null;
		}
		return identity;
	}
	getToken(){
		let token = JSON.parse(localStorage.getItem('token'));
		if(token !="undefined"){
			this.token = token;
		}
		else{
			this.token = null;
		}
		return token;
	}
}
