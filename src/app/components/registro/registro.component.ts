import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../models/usuario';
import * as rutHelpers from 'rut-helpers';
import { Ng2Rut } from 'ng2-rut';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
  providers: [UsuarioService]
})
export class RegistroComponent implements OnInit {

  forma:FormGroup;
  public status;
  public usuario: Usuario;
  constructor(private _route: ActivatedRoute,private _router: Router, private _usuarioService: UsuarioService) {

    this.forma = new FormGroup({

      'rut':         new FormControl('' ,[Validators.required, this.validar] ),
      'nombres':     new FormControl('' ,[Validators.required, Validators.minLength(3),Validators.maxLength(50)] ),
      'apellidos':   new FormControl('' ,[Validators.required, Validators.minLength(3),Validators.maxLength(50)] ),
      'correo':      new FormControl('' ,[Validators.required, Validators.pattern("[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$")] ),
      'telefono':    new FormControl('' ,Validators.required ),
      'dependencia': new FormControl('' ,[Validators.required, Validators.minLength(3),Validators.maxLength(50)] ),
      'persona':     new FormControl('' ,[Validators.required, Validators.minLength(3),Validators.maxLength(50)] ),
      'contrasena1': new FormControl('' ,[Validators.required, Validators.minLength(6),Validators.maxLength(50)] )
    });

  }
  validar( control: FormControl): {[s:string]:boolean}{

    if(!rutHelpers.rutValidate(control.value)){
      return{
        valido:true
      }
    }
    return null;
  }

  registrarUsuario(){
    this.usuario = new Usuario(
        this.forma.controls['rut'].value,
        this.forma.controls['nombres'].value,
        this.forma.controls['apellidos'].value,
        this.forma.controls['correo'].value,
        this.forma.controls['telefono'].value,
        this.forma.controls['dependencia'].value,
        this.forma.controls['persona'].value,
        this.forma.controls['contrasena1'].value,
        1,
        0
      );
    console.log( this.usuario);
    this._usuarioService.registrar(this.usuario).subscribe(
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
      window.location.href = '/loginusuario';
  }


  ngOnInit() {

  }

}
