import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-loginusuario',
  templateUrl: './loginusuario.component.html',
  styleUrls: ['./loginusuario.component.css'],
  providers: [ UsuarioService ]
})
export class LoginusuarioComponent implements OnInit {
  public user;
	public identity;
	public token;
  constructor(private _route: ActivatedRoute, private _router: Router, private _usuarioService: UsuarioService) {
		this.user = {
			"correo":"",
			"clave":"",
			"getHash":"true"
		};

	}

  ngOnInit() {
    this.logoutusuario();
	}
  //redireccionar(){
  //  this._router.navigate(['./solicitudes']);
  //} aquí hice un cambio
  redireccionar(){
    this._router.navigateByUrl('/#');
  }
  registrar(){
    this._router.navigate(['./registro']);
  }
	iniciarSesion(){
		this._usuarioService.signup(this.user).subscribe(
			response =>{
				this.identity = response;
        if(this.identity.length<=1){
          console.log("Error en el servidor");
        }
        else{
          if(!this.identity.status){
            localStorage.setItem('identity', JSON.stringify(this.identity));

            //Get token
            this.user.getHash = null;
            this._usuarioService.signup(this.user).subscribe(
        			response =>{
        				this.token = response;
                if(this.identity.length<=1){
                  console.log("Error en el servidor");
                }
                else{
                  if(!this.identity.status){
                    localStorage.setItem('token', JSON.stringify(this.token));
                    localStorage.setItem('url', 'usuario');
                    window.location.href = '/solicitudes'
                  }
                }
        			},
        			error =>{
        				console.log(<any>error);
        			}
        		);

          }
        }
			},
			error =>{
				console.log(<any>error);
			}
		);
    // this.redireccionar()
	}

  logoutusuario(){
    this._route.params.forEach((params: Params)=>{
      let logout = + params['id'];
      if(logout == 1){
        localStorage.removeItem('identity');
        localStorage.removeItem('token');
        this.identity = null;
        this.token = null;
        this._router.navigate(['/', 'inicio']);
      }
    });
  }
}
