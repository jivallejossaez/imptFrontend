import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { ResponsableService } from '../../services/responsable.service';

@Component({
  selector: 'app-loginresponsable',
  templateUrl: './loginresponsable.component.html',
  styleUrls: ['./loginresponsable.component.css'],
  providers: [ ResponsableService ]
})
export class LoginresponsableComponent implements OnInit {
  public responsable;
	public responsableidentity;
	public responsabletoken;
  constructor(private _route: ActivatedRoute, private _router: Router, private _responsableService: ResponsableService) {
		this.responsable = {
			"correo":"",
			"clave":"",
			"getHash":"true"
		};
	}
  ngOnInit() {
    this.logoutresponsable()
  }
  iniciarSesionResponsable(){
    this._responsableService.signup(this.responsable).subscribe(
      response =>{
        this.responsableidentity = response;
        if(this.responsableidentity.length<=1){
          console.log("Error en el servidor");
        }
        else{
          if(!this.responsableidentity.status){
            localStorage.setItem('identityresponsable', JSON.stringify(this.responsableidentity));

            //Get token
            this.responsable.getHash = null;
            this._responsableService.signup(this.responsable).subscribe(
              response =>{
                this.responsabletoken = response;
                if(this.responsableidentity.length<=1){
                  console.log("Error en el servidor");
                }
                else{
                  if(!this.responsableidentity.status){
                    localStorage.setItem('tokenresponsable', JSON.stringify(this.responsabletoken));
                    localStorage.setItem('url', 'responsable');
                    window.location.href = '/gestionlaboratorios';
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
  logoutresponsable(){
    this._route.params.forEach((params: Params)=>{
      let logout = + params['id'];
      if(logout == 1){
        localStorage.removeItem('identityresponsable');
        localStorage.removeItem('tokenresponsable');
        this.responsableidentity = null;
        this.responsabletoken = null;
        this._router.navigate(['/', 'inicio']);
      }
    })
  }
}
